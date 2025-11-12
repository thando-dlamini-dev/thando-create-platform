import { OpenAI } from "openai";

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_API_KEY,
});

const ChatCompletion = async (content: string) => {
    const chatCompletion = await client.chat.completions.create({
        model: process.env.HF_MODEl!,
        messages: [
            {
                role: "user",
                content,
            },
        ],
    });

    console.log("Response from AI: ", chatCompletion);

    return chatCompletion;
}

export default ChatCompletion;
