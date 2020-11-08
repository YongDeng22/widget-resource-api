import basicAuth from 'express-basic-auth';

export const isAuthorized = (username: string, password: string) : boolean => {
    const userMatches = basicAuth.safeCompare(username, 'admin') as boolean;
    const passwordMatches = basicAuth.safeCompare(password, 'supersecret') as boolean;
    return userMatches && passwordMatches
}
