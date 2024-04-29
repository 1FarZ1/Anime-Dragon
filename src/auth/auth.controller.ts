import {
  Body,
  Controller,
  Get,
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
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req) {
    // return this.authService.login(req.user);
  }

  @Post('/register')
  @ApiConsumes('multipart/form-data')
  //TODO
  // @Header()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        avatar: {
          type: 'string',
          format: 'binary',
        },

        email: {
          type: 'string',
          format: 'email',
        },

        password: {
          type: 'string',
          format: 'password',
        },
        name: {
          type: 'string',
          format: 'string',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('avatar'))
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  register(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    // return file path
    return avatar.path;
    // return this.authService.register(createUserDto);
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
