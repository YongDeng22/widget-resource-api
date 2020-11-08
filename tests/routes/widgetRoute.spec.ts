import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';

import { widgetRoutes } from '../../src/routes/widgetRoute';
import { widgetServices } from '../../src/services/widget.service';
import { doesNotMatch } from 'assert';

const fetchWidgetMock = jest.fn();
widgetServices.fetchWidget = fetchWidgetMock;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/widget', widgetRoutes);

jest.mock('../../src/services/widget.service');


function fakeServiceResult() {
    return {
            id: 1,
            name: 'test1',
            type: 'type1'
        }
}

describe('widget route', () => {
    test ('should return result', async () => {
        fetchWidgetMock.mockResolvedValueOnce(Promise.resolve(fakeServiceResult()));

        const result = await request(app).get('/widget?id=1');
        expect(result.status).toEqual(200);
        expect(result).toEqual(fakeServiceResult());
    })
})