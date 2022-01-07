export const CONFIG = {
    API: {
        HOST: 'https://clearway-mock-server.herokuapp.com',
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
