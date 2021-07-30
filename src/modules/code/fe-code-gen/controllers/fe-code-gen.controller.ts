/* fe-code-gen.controller.ts */

import { Controller, Get, Post } from '@nestjs/common';

@Controller('feCodeGen')
export class FeCodeGenController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('genFilesZip')
  async genFilesZip(): Promise<string> {
    return await 'This action returns genFilesZip';
  }

  // @ApiOperation({
  //   summary: '创建账号',
  //   description: '创建账号',
  // })
  // @ApiOkResponse({
  //   type: String,
  //   description: '创建账号返回值',
  // })
  // @HttpCode(HttpStatus.CREATED)
  // @Post()
  // async createAccount(@Body() createAccountDto: CreateAccountDto): Promise<string> {
  //   return await this.accountService.createAccount(createAccountDto);
  // }
}
