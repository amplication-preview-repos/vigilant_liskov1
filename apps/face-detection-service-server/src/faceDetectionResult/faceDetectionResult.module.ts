import { Module } from "@nestjs/common";
import { FaceDetectionResultModuleBase } from "./base/faceDetectionResult.module.base";
import { FaceDetectionResultService } from "./faceDetectionResult.service";
import { FaceDetectionResultController } from "./faceDetectionResult.controller";
import { FaceDetectionResultResolver } from "./faceDetectionResult.resolver";

@Module({
  imports: [FaceDetectionResultModuleBase],
  controllers: [FaceDetectionResultController],
  providers: [FaceDetectionResultService, FaceDetectionResultResolver],
  exports: [FaceDetectionResultService],
})
export class FaceDetectionResultModule {}
