import { RequestHandler } from "express";
import { getTrendingMovie } from "../services/tmdb-service";

export const getPopularMovies: RequestHandler = async (req, res, next) => {
    const { mediaType, timeWindow } = req.body;
    try {
        const data = await getTrendingMovie(mediaType, timeWindow);
        return res.status(200).json({
            data,
            ok: true
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}