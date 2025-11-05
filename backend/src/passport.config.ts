import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import type { Request, } from "express";

interface User {
    id: string;
    displayName?: string;
    email?: string;
    username: string;
}

interface GoogleUser {
    id: string;
    username: string;
    email: string;
    displayName?: string;
    accessToken: string;
}

interface GoogleProfile {
    id: string;
    displayName?: string;
    name?: {
        familyName?: string;
        givenName?: string;
    }
    emails?: Array<{
        value: string;
        verified?: boolean;
    }>;
    photos?: Array<{
        value: string;
    }>
    provider: string;
}

type Done = (err: Error | null, user?: User | false) => void;

export const initializePassportStrategy = () => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: `${process.env.FRONTEND_URL}/auth/google/callback`,
        passReqToCallback: true,
    }, (req: Request, accessToken: string, refreshToken: string, profile: GoogleProfile, done: Done) => {
        try {
            const user: GoogleUser = {
                id: profile.id,
                displayName: profile.displayName,
                email: profile.emails?.[0]?.value || '',
                username: profile.emails?.[0]?.value?.split('@')[0] || profile.displayName || '',
                accessToken
            }

            console.log(`Google auth user: ${user}`)

            return done(null, user)
        } catch (error) {
            console.error(`Passport strategy error: ${error}`);
            return error as Error
        }
    }))

    //Serialize user for session
    passport.serializeUser((user: Express.User, done) => {
        done(null, (user as GoogleUser).id);
    });

    // Deserialize user - return the same user object
    passport.deserializeUser(async (id: string, done) => {
        // reconstruct a basic user object since the user isn't searched from the DB
        const user: GoogleUser = {
            id: id,
            username: '',
            email: '',
            displayName: "",
            accessToken: '' // Note: accessToken won't be available here
        };
        done(null, user);
    });

}