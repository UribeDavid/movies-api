import { NextFunction, Request, Response } from "express";


export const errorHandler = (err: Error, _req: Request, res:Response, _next: NextFunction) => {
    console.log(err);
    const message = err.message;
    res.status(500).json({
        message
    });
};