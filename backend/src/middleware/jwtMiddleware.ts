import passport from 'passport';
import { Strategy as JWTStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { FindUserById } from "../models/user.model";

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}

passport.use(new JWTStrategy(jwtOptions, async (jwtPayload, done) => {

}))

export const jwtMiddleware = async (req, res, next) => {
    try {
        const id = req.user.id;
        const user = await FindUserById(id);
        if (user) {
            return done(null, user);
        }
    }
    catch (error) {
        
    }
}