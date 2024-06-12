import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FaceDetectionResultServiceBase } from "./base/faceDetectionResult.service.base";

@Injectable()
export class FaceDetectionResultService extends FaceDetectionResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
