import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { FeCodeGenController } from './fe-code-gen/controllers/fe-code-gen.controller';
import { FeCodeGenService } from './fe-code-gen/services/fe-code-gen.service';

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
  providers: [FeCodeGenService],
})
export class CodeModule {}
