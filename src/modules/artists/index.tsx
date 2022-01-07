import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Navigate, Routes } from 'react-router-dom';
import { ARTISTS_ROUTES_CONSTANTS } from '@modules/artists/routes-constants';
import { ArtistSearch } from '@modules/artists/search';
import { ArtistDetails } from '@modules/artists/details';

export const PersonsModule: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ARTISTS_ROUTES_CONSTANTS.ARTIST_SINGLE} element={<ArtistDetails/>}/>
                <Route path={ARTISTS_ROUTES_CONSTANTS.SEARCH} element={<ArtistSearch/>}/>
                <Route
                    path="*"
                    element={<Navigate to={ARTISTS_ROUTES_CONSTANTS.SEARCH} />}
                />
            </Routes>
        </BrowserRouter>
    );
};
