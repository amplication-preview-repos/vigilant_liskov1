import { SortOrder } from "../../util/SortOrder";

export type FaceDetectionResultOrderByInput = {
  createdAt?: SortOrder;
  faceCoordinates?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  updatedAt?: SortOrder;
};
