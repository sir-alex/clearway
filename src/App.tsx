import React from 'react';
import { MainLayout } from '@core/layout/main/main';
import { PersonSearch } from '@modules/person-search';

function App() {
    return (
        <MainLayout>
            <PersonSearch/>
        </MainLayout>
    );
}

export default App;
