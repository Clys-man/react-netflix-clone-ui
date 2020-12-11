//KEY used in API request
const API_KEY = 'd0d6231ec02e7e52e04a7a535b682ff0';
//Base of all Urls used in requests
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: "Netflix Originals",
                items: await basicFetch(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: "Recommended for you",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: "Top rated",
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: "Action",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: "Comedy",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: "Horror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: "Documentary",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}
