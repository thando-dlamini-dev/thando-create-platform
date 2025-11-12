import { Router } from 'express';
import { GenerateRecommendation } from '../controllers/ai.controller'

const router = Router();

router.get('/', GenerateRecommendation);
