export interface ImageReaderDTO {
  image: Express.Multer.File;
  customer_code: string;
  measure_datetime: Date;
  measure_type: "WATER" | "GAS";
}
