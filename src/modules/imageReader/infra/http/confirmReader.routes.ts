import { Router } from "express";
import confirmedReaderController from "../../controllers/confirmedReader.controller";

const confirmReaderRoutes = Router();

confirmReaderRoutes.patch("/", confirmedReaderController.confirm);

export { confirmReaderRoutes };
