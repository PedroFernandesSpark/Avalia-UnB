import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';
@Injectable()
export class ContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    const request = http.getRequest();
    const response: Response = http.getResponse();
    response.setHeader('Content-Security-Policy', `script-src 'self'`);
    response.setHeader('X-Content-Type-Options', `nosniff`);
    response.setHeader('Referrer-Policy', `no-referrer`);
    response.setHeader(
      'Permissions-Policy',
      'accelerometer=(),autoplay=(),camera=(),display-capture=(),document-domain=(),encrypted-media=(),fullscreen=(),gamepad=(),geolocation=(),gyroscope=(),layout-animations=(self),legacy-image-formats=(self),magnetometer=(),microphone=(),midi=(),oversized-images=(self),payment=(),picture-in-picture=(),publickey-credentials-get=(),speaker-selection=(),screen-wake-lock=(),sync-xhr=(self),unoptimized-images=(self),unsized-media=(self),usb=(),web-share=(),xr-spatial-tracking=()',
    );
    request.body.context = {
      params: request.params,
      query: request.query,
      user: request.user,
    };

    return next.handle().pipe(
      map((value) => {
        if (value) {
          delete value.context;
        }
        return value;
      }),
    );
  }
}
