// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
  controllers: [DatabaseController],
})
export class DatabaseModule {}
