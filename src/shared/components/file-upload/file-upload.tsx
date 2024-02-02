import { FC } from 'react';

export interface FileUploadProps {
  apiEndpoint: 'agencyLogo' | 'avatar' | 'subAccountLogo';
  value?: string;
  onChange?: (value: string) => void;
}

const FileUpload: FC<FileUploadProps> = ({ apiEndpoint, onChange, value }) => {
  return <div></div>;
};

export default FileUpload;
