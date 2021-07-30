import { Injectable } from '@nestjs/common';

@Injectable()
export class FeCodeGenService {
  async createCodeFile(codeDto: any): Promise<void> {
    return codeDto;
  }
}
