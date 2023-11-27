import { Module, OnModuleInit } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import * as winston from 'winston';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard, KeycloakConnectModule } from 'nest-keycloak-connect';
import { ProfessorModule } from './modules/professor/professor.module';
import { AvaliacaoMateriaModule } from './modules/avaliacao-materia/avaliacao-materia.module';
import { AvaliacaoProfessorModule } from './modules/avaliacao-professor/avaliacao-professor.module';
import { MateriaModule } from './modules/materia/materia.module';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('AVALIA-UNB', {
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
    TypeOrmModule.forRoot(),
    AvaliacaoMateriaModule,
    AvaliacaoProfessorModule,
    MateriaModule,
    UserModule,
    ProfessorModule,
    HttpModule,
    MateriaModule
  ],
})
export class ApplicationModule implements OnModuleInit {
  constructor(private httpService: HttpService) {}

  onModuleInit(): void {
    this.httpService.axiosRef.interceptors.request.use((req) => {
      return req;
    });
  }
}
