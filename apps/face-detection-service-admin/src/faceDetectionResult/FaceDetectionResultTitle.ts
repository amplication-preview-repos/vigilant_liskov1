import { FaceDetectionResult as TFaceDetectionResult } from "../api/faceDetectionResult/FaceDetectionResult";

export const FACEDETECTIONRESULT_TITLE_FIELD = "id";

export const FaceDetectionResultTitle = (
  record: TFaceDetectionResult
): string => {
  return record.id?.toString() || String(record.id);
};
