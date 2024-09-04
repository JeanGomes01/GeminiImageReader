import { Request, Response } from "express";

class ConfirmedReaderController {
  async confirm(request: Request, response: Response): Promise<Response> {
    try {
      const { measure_uuid, confirmed_value } = request.body;

      if (!measure_uuid || !confirmed_value) {
        return response.status(400).json({
          error_code: "INVALID_DATA",
          error_description:
            "O UUID da medida ou o valor confirmado não foram fornecidos.",
        });
      }

      const isConfirmed = false;

      if (isConfirmed) {
        return response.status(409).json({
          error_code: "CONFIRMED_DUPLICATE",
          error_description: "Leitura do mês já realizada",
        });
      }

      const measureExists = true;

      if (!measureExists) {
        return response.status(404).json({
          error_code: "MEASURE_NOT_FOUND",
          error_description: "Leitura não encontrada",
        });
      }
      console.log(measure_uuid, confirmed_value);
      return response.status(200).json({
        sucess: "true",
      });
    } catch (error) {
      return response.status(500).json({
        error_code: "INTERNAL_SERVER_ERROR",
        error_description: "Ocorreu um erro interno no servidor.",
      });
    }
  }
}
export default new ConfirmedReaderController();
