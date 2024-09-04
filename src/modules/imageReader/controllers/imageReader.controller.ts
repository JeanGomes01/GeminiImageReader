import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadImageReaderService } from "../services/uploadImageReaderService";

class ImageReaderController {
  async upload(request: Request, response: Response): Promise<Response> {
    try {
      const file = request.file;
      console.log("image:", file);
      if (!file) {
        throw new Error("Os dados fornecidos no corpo da função são inválidos");
      }

      const uploadImageReaderService = container.resolve(
        UploadImageReaderService
      );

      const result = await uploadImageReaderService.execute({
        image: file,
        ...request.body,
      });

      return response.status(200).json({
        message: "Operação realizada com sucesso!",
        data: result,
      });
    } catch (error: Error | any) {
      console.error(error); // Para logar o erro no console

      if (
        error.message === "Os dados fornecidos no corpo da função são inválidos"
      ) {
        return response.status(400).json({
          message: error.message,
          data: error,
        });
      } else if (
        error.message === "Já existe uma leitura para este tipo no mês atual"
      ) {
        return response.status(409).json({
          message: error.message,
          data: error,
        });
      } else {
        return response.status(500).json({
          message: "Erro interno do servidor",
          data: error,
        });
      }
    }
  }
}

export default new ImageReaderController();
