import { HttpException, HttpStatus } from '@nestjs/common';

export class UserMarksException extends HttpException {
  constructor() {
    super('Marks always between 10 to 100', HttpStatus.BAD_REQUEST);
  }
}
