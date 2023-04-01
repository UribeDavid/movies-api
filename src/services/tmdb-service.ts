import { MediaType, TimeWindow, TMDB_ROUTES, TMDB_URL } from '../models/tmdb.enum'
import { httpGet } from './fetch-service'

export const getTrendingMovie = async (mediaType: MediaType, timeWindow: TimeWindow) => {
    return httpGet(`${TMDB_URL.baseUrl}/${TMDB_ROUTES.trending}/${mediaType}/${timeWindow}`);
}