import { UploadThingFileRouter } from '@/app/api/uploadthing/core';
import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
  generateUploader
} from '@uploadthing/react';

export const UploadButton = generateUploadButton<UploadThingFileRouter>();
export const UploadDropZone = generateUploadDropzone<UploadThingFileRouter>();
export const Uploader = generateUploader<UploadThingFileRouter>();

export const { uploadFiles, useUploadThing } =
  generateReactHelpers<UploadThingFileRouter>();
