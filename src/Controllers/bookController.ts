import { Request, Response } from 'express';

import Book from "./../book";

export let allbooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        SendResponse(err, res, books);
    });
}

export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (error: any, book: any) => {
        SendResponse(error, res, book);
    });
}


function SendResponse(err: any, res: Response, books: any) {
    if (err) {
        res.send(err);
    }
    else {
        res.send(books);
    }
}

