import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type FaceDetectionResultCreateInput = {
  faceCoordinates?: InputJsonValue;
  image?: ImageWhereUniqueInput | null;
};
