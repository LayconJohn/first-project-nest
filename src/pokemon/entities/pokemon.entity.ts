import { Prisma } from "@prisma/client";

export class Pokemon implements Prisma.PokemonUncheckedCreateInput{
    id?: number;
    name: string;
    heigth?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
