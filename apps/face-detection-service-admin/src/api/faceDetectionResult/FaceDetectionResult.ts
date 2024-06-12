import { JsonValue } from "type-fest";
import { Image } from "../image/Image";

export type FaceDetectionResult = {
  createdAt: Date;
  faceCoordinates: JsonValue;
  id: string;
  image?: Image | null;
  updatedAt: Date;
};
