export const CONFIG = {
    API: {
        HOST: process.env.API_HOST || 'http://localhost:3004',
        API_PREFIX: process.env.API_PREFIX || 'api',
        VERSION: process.env.API_VERSION || 'v1',
        ENDPOINTS: {
            SEARCH_ARTISTS: 'artists/search',
            GET_ARTIST: 'artists/:artistId'
        },
        FETCH_OPTIONS: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    },
}
