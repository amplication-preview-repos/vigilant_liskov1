import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FaceDetectionResultService } from "./faceDetectionResult.service";
import { FaceDetectionResultControllerBase } from "./base/faceDetectionResult.controller.base";

@swagger.ApiTags("faceDetectionResults")
@common.Controller("faceDetectionResults")
export class FaceDetectionResultController extends FaceDetectionResultControllerBase {
  constructor(protected readonly service: FaceDetectionResultService) {
    super(service);
  }
}
