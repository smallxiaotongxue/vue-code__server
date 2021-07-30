/* fe-code-gen.controller.ts */

import {
  Controller,
  Get,
  Body,
  // Delete,
  // Param,
  // ParseIntPipe,
  Post,
  // Patch,
  // UseGuards,
  // Query,
  // HttpStatus,
  // HttpCode,
} from '@nestjs/common';

import { FeCodeGenService } from '../services/fe-code-gen.service';

@Controller('feCodeGen')
export class FeCodeGenController {
  constructor(private readonly feCodeGenService: FeCodeGenService) {}

  @Get('getFilesZip')
  getFilesZip(): string {
    return 'genFilesZip is OK';
  }

  @Post('genFilesZip')
  async genFilesZip(@Body() codeDto: any): Promise<void> {
    return await this.feCodeGenService.createCodeFile(codeDto);
  }
}
