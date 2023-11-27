import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import * as jwt from 'jsonwebtoken';
var crypto = require('crypto');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>
  ){}
  async login(createAvaliacaoMateriaDto: LoginDto) {
    let user;
    try {
      user = await this.repo.findOneOrFail({ email: createAvaliacaoMateriaDto.email });
    } catch (err) {
      throw new BadRequestException('Usuário e/ou senha inválidos');
    }
    var isValid = this.validarSenha(user, createAvaliacaoMateriaDto.senha);
    if (isValid) {
      return {
        access_token: jwt.sign(
          { name: user.nome, cpf: user.cpf, username: user.user },
          process.env.JWT_SECRET,
          { expiresIn: '14 days' },
        ),
      };
    } else {
      throw new NotFoundException('Usuário e/ou senha inválidos');
    }
  }

  validarSenha(usuario: User, senhaInformada: string): boolean {
    const senhaCriptografadaInformada = crypto
      .pbkdf2Sync(senhaInformada, usuario.salt, 1000, 64, 'sha512')
      .toString('hex');
    return senhaCriptografadaInformada === usuario.senha;
  }

  async create(dtoUsuario: CreateUserDto){
    let saveResult = null;
    try {
      const salt = crypto.randomBytes(16).toString('hex');

      const senhaCriptografada = crypto
        .pbkdf2Sync(dtoUsuario.senha, salt, 1000, 64, 'sha512')
        .toString('hex');

      const usuarioSalvo = {
        email: dtoUsuario.email,
        nome: dtoUsuario.nome,
        semestre: dtoUsuario.semestre,
        curso: dtoUsuario.curso,
        emblemas: dtoUsuario.emblemas,
        senha: senhaCriptografada,
        salt: salt,
      };

      saveResult = await this.repo.save(usuarioSalvo);
    } catch (error) {
      if (saveResult != null) {
        await this.repo.delete(saveResult);
      }
      console.log(error);
      throw new InternalServerErrorException();
    }
    return {
      user: saveResult.user,
      cpf: saveResult.cpf,
      nome: saveResult.nome,
    };
  }
}

