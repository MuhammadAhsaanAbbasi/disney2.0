export type Genre = {
    id: number
    name: string
}

export type Generes = {
    genres: Genre[]
}

export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type SearchResult = {
    page: number;
    results: Movie[]
    total_pages: number
    total_results: number
}


export type VideoData = {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: 1080,
    type: string,
    official: boolean,
    published_at: string,
    id: string
}

export type Results = {
    results: VideoData[]
    id: number
}

export type MovieData = {
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    homepage: string,
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    runtime: number,
    poster_path?: string;
    release_date: string;
    status: string,
    tagline: string,
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
