import { Global, Module } from '@nestjs/common';
import {PrismaService} from "./prisma.service";


@Global() // робить модуль доступним у всьому застосунку без повторного імпорту
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
