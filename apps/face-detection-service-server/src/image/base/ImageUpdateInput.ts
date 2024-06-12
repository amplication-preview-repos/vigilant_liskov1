/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FaceDetectionResultUpdateManyWithoutImagesInput } from "./FaceDetectionResultUpdateManyWithoutImagesInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumImageStatus } from "./EnumImageStatus";

@InputType()
class ImageUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FaceDetectionResultUpdateManyWithoutImagesInput,
  })
  @ValidateNested()
  @Type(() => FaceDetectionResultUpdateManyWithoutImagesInput)
  @IsOptional()
  @Field(() => FaceDetectionResultUpdateManyWithoutImagesInput, {
    nullable: true,
  })
  faceDetectionResults?: FaceDetectionResultUpdateManyWithoutImagesInput;

  @ApiProperty({
    required: false,
    enum: EnumImageStatus,
  })
  @IsEnum(EnumImageStatus)
  @IsOptional()
  @Field(() => EnumImageStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;
}

export { ImageUpdateInput as ImageUpdateInput };
