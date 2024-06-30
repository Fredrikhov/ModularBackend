import { TmakeGetController } from ".";
import { HttpRequest } from "../middlewares";

export const makeGetController: TmakeGetController = ({
  listAllInteractor,
}) => {
  return async () => {
    try {
      const getAll = await listAllInteractor();
      return {
        statusCode: 200,
        body: getAll,
      };
    } catch (e) {
      return {
        statusCode: 400,
        body: (e as Error).message,
      };
    }
  };
};
