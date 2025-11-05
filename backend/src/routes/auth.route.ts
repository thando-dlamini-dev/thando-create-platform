import { Router } from 'express';
import passport from 'passport';
import { googleAuth, googleCallback, checkIsAuthenticated } from '../controllers/auth.controller'

const router = Router();

router.get('/google', googleAuth);
router.get('/google/callback', passport.authenticate('google', {
    session: true,
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
}) ,googleCallback)

router.get('me', checkIsAuthenticated)

export default router;