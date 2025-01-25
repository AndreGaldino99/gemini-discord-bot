import axios from 'axios';
import { GeminiRequest, GeminiResponse } from './types';
import { geminiKey } from '../keys';

const sendGeminiRequest = async (message: string):Promise<string> =>{
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;

  const requestPayload: GeminiRequest = {
    contents: [
      {
        parts: [{ text: message }],
      },
    ],
  };

  try {
    const response = await axios.post<GeminiResponse>(url, requestPayload, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200 && response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return response.data.candidates[0].content.parts[0].text;
    } else {
      return `Erro: ${response.status}`;
    }
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      return `Request error: ${error.message}`;
    }
    return 'Unknown error';
  }

};

export {sendGeminiRequest};