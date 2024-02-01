import { getUserDetails } from '@/lib/queries/getUserDetails';
import { verifyAndAcceptInvitation } from '@/lib/queries/verifyAndAcceptInvitation';

async function AgencyPage() {
  const agencyId = await verifyAndAcceptInvitation();
  console.log({ agencyId });

  // get user details
  const user = await getUserDetails();

  if (agencyId) {
  }

  return <div>AgencyPage</div>;
}

export default AgencyPage;
