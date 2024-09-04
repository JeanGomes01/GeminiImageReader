import { Router } from "express";
import { confirmReaderRoutes } from "../../../../modules/imageReader/infra/http/confirmReader.routes";
import { imageReaderRoutes } from "../../../../modules/imageReader/infra/http/imageReader.routes";

const routes = Router();

routes.use("/upload", imageReaderRoutes);
routes.use("/confirm", confirmReaderRoutes);

export { routes };
