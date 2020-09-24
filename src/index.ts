import { useUpload } from './use-upload';
import { UploadProvider, UploadContext } from './provider';
import { createXhrClient, XHROptions } from './clients/xhr';
import { createGraphQLClient, GraphQLOptions } from './clients/graphql';

export {
  useUpload,
  UploadContext,
  UploadProvider,
  createXhrClient,
  createGraphQLClient,
};

export type FileOrFileList = FileList | File;

export type GraphQLOptions = GraphQLOptions;

export type XHROptions = XHROptions;
