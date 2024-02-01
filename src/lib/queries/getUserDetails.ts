'use server';

import { prismaDb } from '@/lib/prisma/db';
import { currentUser } from '@clerk/nextjs';

// This function is used to get the details of the current user
export const getUserDetails = async () => {
  // Get the current user
  const user = await currentUser();

  // If there is no current user, return undefined
  if (!user) {
    return;
  }

  // Query the database for the user with the given email address
  // Include the related Agency, SubAccount, and Permissions data
  const userData = await prismaDb.user.findUnique({
    where: {
      // Use the first email address of the user for the query
      email: user.emailAddresses[0].emailAddress,
    },
    include: {
      // Include the Agency related to the user
      Agency: {
        include: {
          // Include the SidebarOption related to the Agency
          SidebarOption: true,
          // Include the SubAccount related to the Agency
          SubAccount: {
            include: {
              // Include the SidebarOption related to the SubAccount
              SidebarOption: true,
            },
          },
        },
      },
      // Include the Permissions related to the user
      Permissions: true,
    },
  });

  // Return the user data
  return userData;
};
