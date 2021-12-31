export const CONFIG = {
    API: {
        HOST: process.env.API_HOST || 'http://localhost:3004',
        API_PREFIX: process.env.API_PREFIX || 'api',
        VERSION: process.env.API_VERSION || 'v1',
        ENDPOINTS: {
            SEARCH_PERSONS: 'persons/search',
            GET_PERSON: 'persons/:personId'
        },
        FETCH_OPTIONS: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    },
}
