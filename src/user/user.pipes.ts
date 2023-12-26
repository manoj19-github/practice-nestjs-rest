/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class UserPipes implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (typeof value.id !== 'number')
      throw new BadRequestException('Validation Failed');
    return value;
  }
}
