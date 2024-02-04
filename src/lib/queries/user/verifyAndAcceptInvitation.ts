'use server';

import { prismaDb } from '@/lib/prisma/db';
import { saveActivityLogsNotification } from '@/lib/queries/logger/saveActivityLogsNotification';
import { UserRole } from '@/shared/constants/role';
import { clerkClient, currentUser } from '@clerk/nextjs';
import { User } from '@prisma/client';
import { redirect } from 'next/navigation';

export const createTeamUser = async (agencyId: string, user: User) => {
  if (user.role === 'AGENCY_OWNER') {
    return null;
  }
  const response = await prismaDb.user.create({ data: { ...user } });
  return response;
};

export const verifyAndAcceptInvitation = async () => {
  const user = await currentUser();
  if (!user) {
    return redirect('/sign-in');
  }
  const invitationExists = await prismaDb.invitation.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
      status: 'PENDING'
    }
  });

  if (invitationExists) {
    const userDetails = await createTeamUser(invitationExists.agencyId, {
      email: invitationExists.email,
      agencyId: invitationExists.agencyId,
      avatarUrl: user.imageUrl,
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      role: invitationExists.role,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await saveActivityLogsNotification({
      agencyId: invitationExists.agencyId,
      description: 'User accepted invitation',
      subAccountId: undefined
    });

    if (userDetails) {
      await clerkClient.users.updateUserMetadata(user.id, {
        privateMetadata: {
          role: userDetails.role || UserRole.SUB_ACCOUNT_USER
        }
      });

      await prismaDb.invitation.delete({
        where: {
          email: userDetails.email
        }
      });

      return userDetails.agencyId;
    } else {
      return null;
    }
  } else {
    const agency = await prismaDb.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress
      }
    });

    return agency ? agency.agencyId : null;
  }
};
