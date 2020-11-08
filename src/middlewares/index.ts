import { isUserAuthenticated } from './authenticationMiddleware';

export const middlewares = [ isUserAuthenticated ];