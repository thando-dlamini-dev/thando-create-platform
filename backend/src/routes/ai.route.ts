import { Router } from 'express';
import {GenerateRecommendation, TestAIResponse} from '../controllers/ai.controller'

const router = Router();

router.get('/', GenerateRecommendation);
router.get('/test', TestAIResponse)

export default router;