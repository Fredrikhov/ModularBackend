import { TmakePostController } from ".";
import { HttpRequest } from "../middlewares";

export const makePostController: TmakePostController = ({ addInteractor }) => {
  return async (httpRequest: HttpRequest) => {
    const commentInfo = httpRequest.body;
    try {
      const posted = await addInteractor(commentInfo);
      return {
        statusCode: 200,
        body: posted,
      };
    } catch (e) {
      console.log((e as Error).message);
      return {
        statusCode: 500,
        body: e,
      };
    }
  };
};
