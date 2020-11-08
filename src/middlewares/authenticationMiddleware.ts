import { Request, Response, NextFunction } from 'express';


export const isUserAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.headers.role

    if (userRole !== 'admin') {
        res.status(401).json({
            error: `Unauthenticated request to ${req.originalUrl}`
        })
    } else {
        next();
    }
  }