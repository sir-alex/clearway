import { PersonsApiClass } from '@core/services/api/endpoints/persons-api-class';

class ApiClass {
    public persons: PersonsApiClass;

    constructor() {
        this.persons = new PersonsApiClass();
    }
}

export const Api = new ApiClass();
