import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import passport from 'passport'
import authRoute from './routes/auth.route';
import serviceRoute from'./routes/service.route'
import paymentRoute from "./routes/payment.route";
import { initializePassportStrategy } from './passport.config'
import { initializeDatabase } from "./db.config";


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// Initialize Passport
console.log('Initializing Passport...');
initializePassportStrategy();
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: true,
    credentials: true,
}))


app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

//Routes

app.use((req, res, next) => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📨 REQUEST:', req.method, req.url);
    // console.log('📨 Body:', req.body);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    next();
});

app.use('api/auth', authRoute);
app.use('/api/service', serviceRoute)
app.use('/api/payment', paymentRoute)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
    console.log(`Started at ${Date()}`);
    initializeDatabase();
    console.log(`Node env: ${process.env.NODE_ENV}`);
});