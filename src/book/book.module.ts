import {Body, Controller, Module, Post} from '@nestjs/common';
import {BookService} from './book.service';
import {BookController} from './book.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [BookController],
    providers: [BookService],
})
export class BookModule {

}
