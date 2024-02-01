'use client';

import { AlertDialog } from '@/shared/ui/alert-dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { useToast } from '@/shared/ui/use-toast';
import { Agency } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface AgencyDetailsFormProps {
  data?: Partial<Agency>;
}

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Agency name must be at least 2 chars.' }),
  companyEmail: z.string().min(1),
  companyPhone: z.string().min(1),
  whiteLabel: z.boolean(),
  address: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  agencyLogo: z.string().min(1),
});

export default function AgencyDetailsForm({ data }: AgencyDetailsFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [deleteAgency, setDeleteAgency] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: data,
      companyEmail: '',
      companyPhone: '',
      whiteLabel: true,
      address: '',
      city: '',
      zipCode: '',
      state: '',
      country: '',
      agencyLogo: '',
    },
  });

  return (
    <AlertDialog>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Agency Information</CardTitle>
          <CardDescription>
            Lets create an agency for your business. You can edit agency
            settings later from the agency settings tabs.
          </CardDescription>
        </CardHeader>

        <CardContent>
        </CardContent>
      </Card>
    </AlertDialog>
  );
}
