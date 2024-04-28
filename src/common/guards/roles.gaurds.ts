/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<any>{
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();


    const user = (await this.usersService.findOne(request.user.userId));  
    // const hasRole = () => roles.includes(user?.role);

    // if(!(user && user.role && hasRole())){
        // throw new UnauthorizedException(
            // 'You are not allowed to access this resource , Only Admins',
        // );
    // }

    // return true;
  }
}