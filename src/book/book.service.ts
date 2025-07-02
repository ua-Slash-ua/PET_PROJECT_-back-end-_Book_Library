import {Injectable} from '@nestjs/common';
import {typeBook} from "../types/book.types";
import {typeResponse} from "../types/response.types";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService) {
    }

    async addBook(data: typeBook): Promise<typeResponse> {
        let result = await this.prisma.book.create({
            data
        })
        if (!result) {
            return {
                status: "error",
                message: `Не вдалося додати книгу ${data.title}`,
                data: result
            }
        }
        return {
            status: "success",
            message: `Книгу ${data.title}з ID ${result.id} додано!`,
            data: result
        }
    }
}
