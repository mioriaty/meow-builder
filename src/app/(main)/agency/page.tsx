import AgencyDetailsForm from '@/app/(main)/agency/__components/forms/agency-details';
import { Plan } from '@/generated/client';
import { getUserDetails } from '@/lib/queries/getUserDetails';
import { verifyAndAcceptInvitation } from '@/lib/queries/verifyAndAcceptInvitation';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function AgencyPage({
  searchParams
}: {
  searchParams: { plan: Plan; state: string; code: string };
}) {
  const agencyId = await verifyAndAcceptInvitation();

  // get user details
  const user = await getUserDetails();


  if (agencyId) {
    if (user?.role === 'SUBACCOUNT_USER' || user?.role === 'SUBACCOUNT_GUEST') {
      return redirect('/subaccount');
    }

    if (user?.role === 'AGENCY_ADMIN' || user?.role === 'AGENCY_OWNER') {
      if (searchParams.plan) {
        return redirect(
          `/agency/${agencyId}/billing?plan=${searchParams.plan}`
        );
      }

      if (!searchParams.state) {
        return redirect(`agency/${agencyId}`);
      } else {
        const [statePath, stateAgencyId] = searchParams.state.split('__');

        if (!stateAgencyId) {
          return <div>Not Authorized</div>;
        }

        return redirect(
          `/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`
        );
      }
    } else {
      return <div>Not Authorized</div>;
    }
  }

  const authUser = await currentUser();

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
        <h1 className="text-4xl"> Create an Agency</h1>

        <AgencyDetailsForm />
      </div>
    </div>
  );
}

export default AgencyPage;
