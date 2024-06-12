import { FaceDetectionResultUpdateManyWithoutImagesInput } from "./FaceDetectionResultUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  faceDetectionResults?: FaceDetectionResultUpdateManyWithoutImagesInput;
  status?: "Option1" | null;
  url?: string | null;
};
