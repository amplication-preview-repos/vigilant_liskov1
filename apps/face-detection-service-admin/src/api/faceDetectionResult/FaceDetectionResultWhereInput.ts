import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type FaceDetectionResultWhereInput = {
  faceCoordinates?: JsonFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
};
