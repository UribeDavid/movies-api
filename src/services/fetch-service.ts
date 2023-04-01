const fetch = require('node-fetch');

import { API_KEY } from "../models/tmdb.enum";

const fetchOptions:RequestInit = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
};

export const httpGet = async (url: string) => {
    const response = await fetch(`${url}?api_key=${API_KEY}`, {
        ...fetchOptions,
        body: null,
        method: 'GET'
    });
    return response.json();
}

export const httpPost = async (url: string, data: Object) => {
    const response = await fetch(`${url}?api_key=${API_KEY}`, {
        ...fetchOptions,
        body: JSON.stringify(data),
        method: 'POST'
    });
    return response.json();
}