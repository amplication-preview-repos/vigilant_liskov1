import { FaceDetectionResultCreateNestedManyWithoutImagesInput } from "./FaceDetectionResultCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  faceDetectionResults?: FaceDetectionResultCreateNestedManyWithoutImagesInput;
  status?: "Option1" | null;
  url?: string | null;
};
