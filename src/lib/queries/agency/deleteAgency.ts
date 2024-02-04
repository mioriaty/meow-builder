'use server';

import { prismaDb } from '@/lib/prisma/db';

export const deleteAgency = async (agencyId: string) => {
  const response = await prismaDb.agency.delete({
    where: {
      id: agencyId
    }
  });
  return response;
};
