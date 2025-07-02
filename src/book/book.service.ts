import {Injectable} from '@nestjs/common';
import {typeBook} from "../types/book.types";
import {typeResponse} from "../types/response.types";
import {PrismaService} from "../prisma/prisma.service";
import * as stream from "node:stream";

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

    async getBook(): Promise<typeResponse> {
        let result = await this.prisma.book.findMany()
        if (!result || result.length === 0) {
            return {
                status: "error",
                message: `Не вдалося отримати книги!`,
                data: result
            }
        }
        return {
            status: "success",
            message: `Книги отримано!`,
            data: result
        }
    }

    async getBooksAuthor(): Promise<typeResponse> {
        let result = await this.prisma.book.findMany({
            select:{
                author:true
            }
        })
        if (!result || result.length === 0) {
            return {
                status: "error",
                message: `Не вдалося отримати авторів!`,
                data: result
            }
        }
        const authorCount: Record<string, number> = {};

        result.forEach((element) => {
            const author = element.author; // або інше поле, яке ти хочеш рахувати

            if (author in authorCount) {
                authorCount[author]++;
            } else {
                authorCount[author] = 1;
            }
        });

        return {
            status: "success",
            message: `Авторів отримано!`,
            data: authorCount
        }
    }

    async getBooksGenre(): Promise<typeResponse> {
        let result = await this.prisma.book.findMany({
            select:{
                genre:true
            }
        })
        if (!result || result.length === 0) {
            return {
                status: "error",
                message: `Не вдалося отримати жанри!`,
                data: result
            }
        }
        const genreCount: Record<string, number> = {};

        result.forEach((element) => {
            const genre = element.genre; // або інше поле, яке ти хочеш рахувати

            if (genre in genreCount) {
                genreCount[genre]++;
            } else {
                genreCount[genre] = 1;
            }
        });

        return {
            status: "success",
            message: `Жанри отримано!`,
            data: genreCount
        }
    }
}
