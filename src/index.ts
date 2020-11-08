import express from "express";
import bodyParser from 'body-parser';
import { routes } from './routes';
import { isAuthorized } from './unitilies/authorizer';
import { middlewares } from './middlewares';
import basicAuth from 'express-basic-auth';

const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(basicAuth({
  authorizer: isAuthorized,
  unauthorizedResponse: { message: 'Unauthorized request' }
}));

app.use('/api', middlewares, routes);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});