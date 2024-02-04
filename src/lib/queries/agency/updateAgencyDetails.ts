'use server';

import { Agency } from '@/generated/client';
import { prismaDb } from '@/lib/prisma/db';

export const updateAgencyDetails = async (
  agencyId: string,
  agencyDetails: Partial<Agency>
) => {
  const response = await prismaDb.agency.update({
    where: {
      id: agencyId
    },
    data: {
      ...agencyDetails
    }
  });

  return response;
};
