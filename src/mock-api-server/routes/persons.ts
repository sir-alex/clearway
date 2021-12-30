import * as express from 'express';
import { Core } from '../common/core';

export class PersonsRouter extends Core {

    public router: express.Router;

    constructor() {
        super();
        this.router = express.Router();
        this.init();
    }

    private getPersonsByQuery = (req: express.Request, res: express.Response, _next: express.NextFunction): void => {
        if (req.query.query === 'error') {
            res.status(500).send(null);
        } else {
            const mockJsonSuccess: JSON = this.getMockJson('persons/get-query.json');
            res.status(200).json(mockJsonSuccess);
        }
    };

    private getPersonSingle = (req: express.Request, res: express.Response, _next: express.NextFunction): void => {
        let mockJson: JSON | null;
        let responseStatus: number;
        switch (req.params.personId) {
            case typeof null:
                responseStatus = 404;
                mockJson = null;
                break;
            default:
                responseStatus = 200;
                mockJson = this.getMockJson(`persons/get-person-${req.params.personId}.json`);
        }
        res.status(responseStatus).json(mockJson);
    };

    private init(): void {
        this.router.get('/search', this.getPersonsByQuery);
        this.router.get('/:personId', this.getPersonSingle);
    }

}
