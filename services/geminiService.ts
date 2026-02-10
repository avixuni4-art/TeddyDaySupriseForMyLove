
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTeddyMessage = async (userName: string = "Maya"): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a Teddy Day message for a girl named ${userName}. The theme is "Kuromi" (Sanrio character) - so it should be a mix of sassy, cheeky, cool, but deeply loving and sweet at the end. Mention how she's the coolest "teddy" and the only one who can handle your heart. Keep it under 45 words.`,
      config: {
        temperature: 1.0,
        topP: 0.9,
      },
    });

    return response.text || `Hey Maya, you're the baddest and the sweetest "teddy" I've ever met. Happy Teddy Day, my love!`;
  } catch (error) {
    console.error("Error generating message:", error);
    return `Maya, you're my favorite kind of trouble. Happy Teddy Day to the girl who stole my heart! 🖤💖`;
  }
};
