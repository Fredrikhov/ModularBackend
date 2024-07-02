import { TmakePostController } from ".";
import { HttpRequest } from "../middlewares";

export const makePostController: TmakePostController = ({ interactor }) => {
  return async (httpRequest: HttpRequest) => {
    const commentInfo: { text: string } = httpRequest.body;
    try {
      const posted = await interactor.add(commentInfo);
      return {
        statusCode: 200,
        body: posted,
      };
    } catch (e) {
      return {
        statusCode: 500,
        body: e,
      };
    }
  };
};
