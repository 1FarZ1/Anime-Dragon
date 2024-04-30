import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.gaurd';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/utils/multer.options';
import * as fs from 'fs';

@Controller('/auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req) {
    return this.authService.login({
      id: req.user.userId,
      email: req.user.email,
      role: req.user.role,
    });
  }

  @Post('/register')
  @ApiConsumes('multipart/form-data')
  //TODO
  // @Header()
  @UseInterceptors(FileInterceptor('avatar', multerOptions))
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    try {
      const user = await this.authService.register(createUserDto, avatar.path);

      return user;
    } catch (error) {
      if (avatar && avatar.path) {
        fs.unlinkSync(avatar.path);
      }
      throw error;
    }
  }
}

//   @Post('/forgot-password')
//   forgotPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
//     return this.authService.forgetPassword(forgetPasswordDto.email);
//   }

//   @Post('/verify-token')
//   verifyToken(@Body() verifyTokenDto: VerifyTokenDto) {
//     return this.authService.verifyToken(verifyTokenDto.token);

//   @Post('/verify-code')
//   verifyCode(@Body() verifyCodeDto: VerifyCodeDto) {
//     return this.authService.verifyCode(verifyCodeDto);
//   }

//   @Post('/reset-password')
//   resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
//     return this.authService.resetPassword(resetPasswordDto);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Post('/change-password')
//   changePassword(@Body() changePasswordDto: ChangePasswordDto, @Req() req) {
//     return this.authService.changePassword(changePasswordDto, req.user.email);
//   }
