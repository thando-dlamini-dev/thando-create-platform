import passport from 'passport'
import { Request, Response, NextFunction } from 'express'
import { GoogleUser } from '../passport.config'

//Ensures that user info is stored in req.user using jwt for later use or returns auth error
export const authenticateJWT = (req: Request, res: Response, next: NextFunction ) => {
    passport.authenticate('jwt', {session: false}, (err: Error, user: GoogleUser , info) => {
        if (err) {
            //Send error to next function
            return next(err);
        }
        if (!user) {
            //Redirect to login page if user data is not found
             res.redirect(`${process.env.FRONTEND_URL}/login`);
             return res.status(401).json({error: "Unauthorized"})
        }
        req.user = user;
        next();
    })(req, res, next);
}