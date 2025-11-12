import {AISessionData} from "../models/service.model";
import ChatCompletion from "../lib/HuggingFace";
import { Request, Response } from "express";

export const GenerateRecommendation = async (req: Request<object, object, AISessionData>, res: Response)=> {
    try {
        const aiSessionData = req.body;

        const AIResponse = await ChatCompletion(JSON.stringify(aiSessionData));
        return res.status(200).json({
            success: true,
            AIResponse
        })
    }
    catch (error) {
        console.log(`Error in GenerateRecommendation controller: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Error while generating website recommendation',
        })
    }


}