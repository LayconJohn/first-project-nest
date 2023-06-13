import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPokemonDto: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data: {
        ...createPokemonDto
      }
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany({});
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where: {id}
    });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({
      where: {
        id
      }
    });
  }
}
