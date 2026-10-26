
import OpenAI from "openai/index.mjs";
import { OPENAI_API_KEY } from "@env";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default async function SendMessage(messageArray) {
  const response = await openai.chat.completions.create({
    model: "gpt-5",
    messages: messageArray,
  });

  const result = response.choices[0]?.message?.content || "";

  return {
    role: "assistant",
    content: result,
  };
}
