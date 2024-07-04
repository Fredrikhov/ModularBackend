import { MakeControllerType } from ".";
import { HttpRequest } from "../middlewares/withHttpMiddleware";

export const makePostController: MakeControllerType = ({ interactor }) => {
  return async ({ body }) => {
    try {
      const posted = await interactor.add({ body });
      return {
        statusCode: 200,
        body: posted,
      };
    } catch (e) {
      return {
        statusCode: 400,
        body: (e as Error).message,
      };
    }
  };
};
