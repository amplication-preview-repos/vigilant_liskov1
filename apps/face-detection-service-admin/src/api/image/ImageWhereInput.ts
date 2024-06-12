import { FaceDetectionResultListRelationFilter } from "../faceDetectionResult/FaceDetectionResultListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  faceDetectionResults?: FaceDetectionResultListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
  url?: StringNullableFilter;
};
