import { Injectable } from '@nestjs/common';
import { CreateAuthDto, LoginBody } from './auth.interface';

@Injectable()
export class AuthService {
  login(authDto: CreateAuthDto): LoginBody {
    return {
      status: 'success',
      name: authDto.name,
    };
  }

  getUser(): { name: string } {
    return { name: 'Aslam Mac' };
  }
}
