import { FaceDetectionResult } from "../faceDetectionResult/FaceDetectionResult";

export type Image = {
  createdAt: Date;
  faceDetectionResults?: Array<FaceDetectionResult>;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  url: string | null;
};
