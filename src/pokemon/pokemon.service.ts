import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    images: {
      select: {
        url: true,
      }
    }
  };

  create(createPokemonDto: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data: {
        ...createPokemonDto
      },
      include: this._include
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany({
      include: this._include
    });
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where: {id},
      include: this._include
    });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: {id},
      data: {...updatePokemonDto},
      include: this._include
    });
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({
      where: {
        id
      }
    });
  }
}
