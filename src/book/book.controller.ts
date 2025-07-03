import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import { BookService } from './book.service';
import {typeBook} from "../types/book.types";
import {typeResponse} from "../types/response.types";
import {BookFilterDto} from "../dto/filter_book.dto";

@Controller('book')
export class BookController {
  constructor(
      private readonly bookService: BookService
  ) {
  }

  @Get()
  getBooks(@Query() filter: BookFilterDto) {
    return this.bookService.getBook(filter);
  }

  @Get('author')
  async getBooksAuthor():Promise<typeResponse>{
    return this.bookService.getBooksAuthor();
  }
  @Get('genre')
  async getBooksGenre():Promise<typeResponse>{
    return this.bookService.getBooksGenre();
  }

  @Post('')
  async addBook(@Body() dataBook: typeBook):Promise<typeResponse> {
    return this.bookService.addBook(dataBook);
  }


}
