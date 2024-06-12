import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type FaceDetectionResultUpdateInput = {
  faceCoordinates?: InputJsonValue;
  image?: ImageWhereUniqueInput | null;
};
