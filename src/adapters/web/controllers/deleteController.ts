import { MakeControllerType } from ".";

export const makeDeleteController: MakeControllerType = ({ interactor }) => {
  return async ({ body }) => {
    try {
      const removedElement = await interactor.remove({ body });
      return {
        statusCode: 200,
        body: removedElement,
      };
    } catch (e) {
      return {
        statusCode: 400,
        body: (e as Error).message,
      };
    }
  };
};
