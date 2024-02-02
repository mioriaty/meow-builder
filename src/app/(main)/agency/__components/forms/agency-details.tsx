'use client';

import { AlertDialog } from '@/shared/ui/alert-dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/ui/card';
import { useToast } from '@/shared/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Agency } from '@/generated/client';
import FileUpload from '@/shared/components/file-upload';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/shared/ui/form';
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
  agencyLogo: z.string().min(1)
});

export default function AgencyDetailsForm({ data }: AgencyDetailsFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [deleteAgency, setDeleteAgency] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: data?.name,
      companyEmail: data?.companyEmail,
      companyPhone: data?.companyPhone,
      whiteLabel: data?.whiteLabel,
      address: data?.address,
      city: data?.city,
      zipCode: data?.zipCode,
      state: data?.state,
      country: data?.country,
      agencyLogo: data?.agencyLogo
    }
  });
  const isLoading = form.formState.isSubmitting || form.formState.isLoading;

  useEffect(() => {
    if (data) {
      form.reset(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {};

  return (
    <AlertDialog>
      <Card className="w-full mt-4">
        <CardHeader>
          <CardTitle>Agency Information</CardTitle>
          <CardDescription>
            Lets create an agency for your business. You can edit agency
            settings later from the agency settings tabs.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                name="agencyLogo"
                disabled={isLoading}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agency Logo</FormLabel>
                    <FormControl>
                      <FileUpload apiEndpoint="agencyLogo" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </AlertDialog>
  );
}
