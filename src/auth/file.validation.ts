/* eslint-disable @typescript-eslint/no-unused-vars */
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const oneKb = 1000;
    if (metadata.type !== 'body' || !value) {
      return value;
    }

    return value.size < oneKb * 1024 * 1024 * 5 ? value : null;
  }
}
