import { prismaDb } from '@/lib/prisma/db';
import { currentUser } from '@clerk/nextjs';

export const saveActivityLogsNotification = async ({
  agencyId,
  description,
  subAccountId
}: {
  description: string;
  agencyId?: string;
  subAccountId?: string;
}) => {
  const authUser = await currentUser();
  let userData;

  if (!authUser) {
    const response = await prismaDb.user.findFirst({
      where: {
        Agency: {
          SubAccount: {
            some: {
              id: subAccountId
            }
          }
        }
      }
    });
    if (response) {
      userData = response;
    }
  } else {
    userData = await prismaDb.user.findUnique({
      where: {
        email: authUser.emailAddresses[0].emailAddress
      }
    });
  }

  if (!userData) {
    console.log('Could not find user!');
    return;
  }

  let foundAgencyId = agencyId;
  if (!foundAgencyId) {
    if (!subAccountId) {
      throw new Error('AgencyId or SubAccountId is required!');
    }

    const response = await prismaDb.subAccount.findUnique({
      where: {
        id: subAccountId
      }
    });

    if (response) {
      foundAgencyId = response.agencyId;
    }
  }

  if (subAccountId) {
    await prismaDb.notification.create({
      data: {
        notification: `${userData.name} ${description}`,
        User: {
          connect: {
            id: userData.id
          }
        },
        Agency: {
          connect: {
            id: foundAgencyId
          }
        },
        SubAccount: {
          connect: {
            id: subAccountId
          }
        }
      }
    });
  } else {
    await prismaDb.notification.create({
      data: {
        notification: `${userData.name} ${description}`,
        User: {
          connect: {
            id: userData.id
          }
        },
        Agency: {
          connect: {
            id: foundAgencyId
          }
        }
      }
    });
  }
};
