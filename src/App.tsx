import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MainLayout } from '@core/layout/main/main';
import { PersonsModule } from '@modules/persons';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout>
                <PersonsModule/>
            </MainLayout>
            {process.env.NODE_ENV !== 'production' &&
                <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
            }
        </QueryClientProvider>
    );
}

export default App;
