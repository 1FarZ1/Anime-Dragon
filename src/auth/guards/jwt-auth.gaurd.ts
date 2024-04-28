import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  //   canActivate(
  //     context: ExecutionContext,
  //   ): boolean | Promise<boolean> | Observable<boolean> {
  //     // do something
  //   }
}
