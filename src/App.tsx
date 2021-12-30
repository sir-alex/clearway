import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MainLayout } from '@core/layout/main/main';
import { PersonSearch } from '@modules/person-search';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout>
                <PersonSearch/>
            </MainLayout>
            {process.env.NODE_ENV !== 'production' &&
                <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
            }
        </QueryClientProvider>
    );
}

export default App;
