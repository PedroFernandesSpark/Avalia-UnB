import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export function middleware(app: INestApplication): INestApplication {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const options = new DocumentBuilder()
      .setTitle('Avalia UnB')
      .setDescription('Api de avaliação de matérias')
      .setVersion(`${process.env.BUILD_NUMBER}`)
      .setContact(
        'UnB',
        'Alunos',
        'SI',
      )
      .addBearerAuth({
        in: 'header',
        type: 'oauth2',
        flows: {
          authorizationCode: {
            scopes: {},
            authorizationUrl: `${process.env.AUTH_URL}/realms/${process.env.AUTH_REALM}/protocol/openid-connect/auth`,
            tokenUrl: `${process.env.AUTH_URL}/realms/${process.env.AUTH_REALM}/protocol/openid-connect/token`,
          },
        },
      })
      .build();
    const document = SwaggerModule.createDocument(app, options);

    const customOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        persistAuthorization: true,
        oauth: {
          clientId: `${process.env.AUTH_CLIENTID}`,
        },
      },
      customSiteTitle: `Swagger - Avalia UnB`,
    };

    SwaggerModule.setup('docs', app, document, customOptions);
  }

  return app;
}
