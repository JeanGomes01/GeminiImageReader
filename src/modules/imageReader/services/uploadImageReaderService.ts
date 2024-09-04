// const genAI = new GoogleGenerativeAI(apiKey!);

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Write a story about an AI and magic";

// const result = await model.generateContent(prompt);
// const response = await result.response;
// const text = response.text();
// console.log(text);

import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import { injectable } from "tsyringe";
import { ImageReaderDTO } from "../dtos/imageReader.dto";
import { ImageReaderResponseDTO } from "../dtos/imageReaderResponse.dto";

@injectable()
export class UploadImageReaderService {
  async execute(
    imageReaderDTO: ImageReaderDTO
  ): Promise<ImageReaderResponseDTO> {
    const apiKey = process.env.API_KEY;
    console.log(apiKey);

    const buffer = fs.readFileSync(imageReaderDTO.image.path);
    const b64 = buffer.toString("base64");

    const genAI = new GoogleGenerativeAI(apiKey!);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    const result = await model.generateContent([
      "O que tem nessa foto ? responda em português BR.",
      {
        inlineData: {
          data: b64,
          mimeType: "image/" + imageReaderDTO.image.originalname.split(".")[1],
        },
      },
    ]);
    console.log(result.response.text());

    return {
      image_url: "",
      measure_value: 0,
      measure_uuid: "",
    };
  }
}
