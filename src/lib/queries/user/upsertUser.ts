'use server';

import { User } from '@/generated/client';
import { prismaDb } from '@/lib/prisma/db';
import { clerkClient, currentUser } from '@clerk/nextjs';

export const upsertUser = async (newUser: Partial<User>) => {
  const user = await currentUser();
  if (!user) {
    return;
  }

  const userRecord = await prismaDb.user.upsert({
    where: {
      email: user.emailAddresses[0].emailAddress
    },
    update: newUser,
    create: {
      id: user.id,
      avatarUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      role: newUser.role || 'SUBACCOUNT_USER'
    }
  });

  await clerkClient.users.updateUserMetadata(user.id, {
    privateMetadata: {
      role: newUser.role || 'SUBACCOUNT_USER'
    }
  });

  return userRecord;
};
