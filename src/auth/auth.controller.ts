import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAuthDto, LoginBody } from './auth.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  getUser(): { name: string } {
    return this.authService.getUser();
  }
  @Post()
  login(@Body() authDto: CreateAuthDto): LoginBody {
    return this.authService.login(authDto);
  }
}
