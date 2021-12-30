import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { PERSONS_ROUTES_CONSTANTS } from '@modules/persons/routes-constants';
import { PersonSearch } from '@modules/persons/search';
import { PersonAdd } from '@modules/persons/add';

export const PersonsModule: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PERSONS_ROUTES_CONSTANTS.PERSON_SINGLE} element={<PersonAdd/>}/>
                <Route path={PERSONS_ROUTES_CONSTANTS.SEARCH} element={<PersonSearch/>}/>
                <Route
                    path="*"
                    element={<Navigate to={PERSONS_ROUTES_CONSTANTS.SEARCH} />}
                />
            </Routes>
        </BrowserRouter>
    );
};
