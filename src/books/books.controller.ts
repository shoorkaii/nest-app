import {Body, Controller, Delete, Get, Param, Post, Query} from '@nestjs/common';
import {BooksService} from "./books.service";
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) {
    }

    @Get()
    async getBooks() {
        return await this.bookService.getBooks();
    }

    @Get(':bookID')
    async getBook(@Param('bookID') bookID) {
        return await this.bookService.getBook(bookID);
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO){
        return await this.bookService.addBook(createBookDTO);
    }

    @Delete()
    async deleteBook(@Query() query){
        return await this.bookService.deleteBook(query.bookID)
    }
}
