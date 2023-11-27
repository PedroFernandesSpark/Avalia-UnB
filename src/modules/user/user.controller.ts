import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async loginLocal(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto);
  }

  @Post('/signup')
  async criarLogin(@Body() loginDto: CreateUserDto) {
    return await this.userService.create(loginDto);
  }
}
