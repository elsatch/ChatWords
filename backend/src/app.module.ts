import { Module } from '@nestjs/common';
import { ExperimentModule } from './experiment/experiment.module';
import { WordModule } from './word/word.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/docs',
      rootPath: join(__dirname, '..', 'public'),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/frontend'),
    }),
    DatabaseModule,
    ExperimentModule,
    WordModule,
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: [  {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class AppModule {}
