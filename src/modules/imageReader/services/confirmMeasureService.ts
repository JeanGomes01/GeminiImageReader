import { ConfirmMeasureRequestDTO } from "../dtos/confirmMeasureRequest.dto";

export class ConfirmedMeasureService {
  async execute(confirmMeasureRequestDTO: ConfirmMeasureRequestDTO) {
    console.log(confirmMeasureRequestDTO);
    return confirmMeasureRequestDTO;
  }
}
