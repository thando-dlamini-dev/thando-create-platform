import {AISessionData} from "../models/service.model";
import ChatCompletion from "../lib/HuggingFace";
import {Request, Response} from "express";

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

export const TestAIResponse = async (req: Request, res: Response) => {
    const lang = "C#"

    const format = JSON.stringify({
        language: "language full name",
        techStack: [
            "tool1",
            "tool2",
            "tool3",
        ],
        releaseDate: 'day/month/year',
        lastYearUsed: 'year the stack was last used'
    });

    try {
        console.log('Stringified format object: ', format);

        const prompt = `List the tech stack for this language: ${lang} in this object format: ${format}, response must be in stringified json form.`

        const AIResponse = await ChatCompletion(prompt);

        console.log('Response: ', AIResponse);

        return res.status(200).json({
            success: true,
            prompt,
            response: AIResponse
        })
    }
    catch (err) {
        console.log(`Error in TestAIResponse controller: ${err}`);

        return res.status(500).json({
            success: false,
            message: 'Error while getting tech stack for this language',
        })
    }
}