import passport from 'passport';
import { Request, Response } from 'express';

//User visits: GET /api/auth/google
export const googleAuth = passport.authenticate('google', {
    scope: ['profile', 'email']
})

//Google redirects to: GET /api/auth/google/callback
//Passport.authenticate() processes the Oauth code
//GoogleStrategy callback runs
export const googleCallback = async (req: Request, res: Response) => {
    //Stores user in req.user after successful login
    passport.authenticate('google', {
        failureRedirect: `${process.env.FRONTEND_URL}/login?error=auth_failed`,
    });
    //Redirect to home page after successful Login
    res.redirect(`${process.env.FRONTEND_URL}`);
}

export const checkIsAuthenticated = async (req: Request, res: Response) => {
    if (req.isAuthenticated()){
        res.json({
            success: true,
            user: req.user
        })
    }
}
