import { query } from '../db.config'
import { RowDataPacket} from "mysql2/promise";

const UserModel = () => {

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

export const findOrCreateUser = async (profile: GoogleProfile, accessToken: string) => {
    try{
        const { id } = profile;

        const sql = 'SELECT * FROM users WHERE id = ?'

        //Returns array with user info or empty array
        const existingUser = await query(sql, [id]);

        //If existingUser array is empty create new user
        if (existingUser.length < 1) {
            console.log(`Creating user with id ${id} `);

            const sql = `INSERT INTO users (
                id,
                username,
                email,
                display_name,
                google_access_token
            ) VALUES (?, ?, ?, ?, ?)`

            const params = [
                profile.id,
                profile.displayName || '',
                profile.emails?.[0].value || '',
                profile.photos?.[0].value || '',
                accessToken
            ]

            await query(sql, params)
        }


        //Logging existing user
        console.log(`Existing user data: ${existingUser}`);

        return existingUser;
    }
    catch(err){
        console.log(`Error while finding or creating user: ${err}`)
    }
}

export const FindUserById = async (userId: string): Promise<RowDataPacket[]> => {
    try {
        const sql = 'SELECT * FROM users WHERE id = ?';

        const result =  await query(sql, [userId]) as RowDataPacket[];

        if(result.length < 1){
            console.log(`Error while finding or creating user with id ${userId}`);
            throw new Error(`Error while finding or creating user with id ${userId}`);
        }

        return result;
    }
    catch(error){
        console.log(`Error while finding user with id: ${userId}: ${error}`);
        throw error;
    }
}

export default UserModel;