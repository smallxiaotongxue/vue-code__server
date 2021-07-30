import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { FeCodeGenController } from './fe-code-gen/controllers/fe-code-gen.controller';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'code',
        module: CodeModule,
      },
    ]),
  ],
  controllers: [FeCodeGenController],
  providers: [],
})
export class CodeModule {}
