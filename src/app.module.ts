import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodeModule } from './modules/code/code.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CodeModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
