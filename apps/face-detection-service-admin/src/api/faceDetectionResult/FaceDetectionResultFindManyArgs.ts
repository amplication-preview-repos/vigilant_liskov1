import { FaceDetectionResultWhereInput } from "./FaceDetectionResultWhereInput";
import { FaceDetectionResultOrderByInput } from "./FaceDetectionResultOrderByInput";

export type FaceDetectionResultFindManyArgs = {
  where?: FaceDetectionResultWhereInput;
  orderBy?: Array<FaceDetectionResultOrderByInput>;
  skip?: number;
  take?: number;
};
