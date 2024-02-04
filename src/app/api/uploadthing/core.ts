import { auth } from '@clerk/nextjs';
import { createUploadthing } from 'uploadthing/server';

const funcUploadThing = createUploadthing();

const authenticateUser = async () => {
  const user = auth();
  //  If you throw, the user will not able to be upload
  if (!user) {
    throw new Error('Unauthorized');
  }
  // whatever is returned here is accessible on onUploadComplete as `metadata`
  return user;
};

// file router for ur app, can contain multiple FileRouters
export const uploadThingFileRouter = {
  subAccountLogo: funcUploadThing({
    image: {
      maxFileSize: '2MB',
      maxFileCount: 1
    }
  })
    .middleware(authenticateUser)
    .onUploadComplete(() => {}),
  avatar: funcUploadThing({
    image: {
      maxFileSize: '2MB',
      maxFileCount: 1
    }
  })
    .middleware(authenticateUser)
    .onUploadComplete(() => {}),
  agencyLogo: funcUploadThing({
    image: {
      maxFileSize: '2MB',
      maxFileCount: 1
    }
  })
    .middleware(authenticateUser)
    .onUploadComplete(() => {}),
  media: funcUploadThing({
    image: {
      maxFileSize: '2MB',
      maxFileCount: 1
    }
  })
    .middleware(authenticateUser)
    .onUploadComplete(() => {})
};

export type UploadThingFileRouter = typeof uploadThingFileRouter;