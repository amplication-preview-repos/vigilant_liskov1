import * as graphql from "@nestjs/graphql";
import { FaceDetectionResultResolverBase } from "./base/faceDetectionResult.resolver.base";
import { FaceDetectionResult } from "./base/FaceDetectionResult";
import { FaceDetectionResultService } from "./faceDetectionResult.service";

@graphql.Resolver(() => FaceDetectionResult)
export class FaceDetectionResultResolver extends FaceDetectionResultResolverBase {
  constructor(protected readonly service: FaceDetectionResultService) {
    super(service);
  }
}
