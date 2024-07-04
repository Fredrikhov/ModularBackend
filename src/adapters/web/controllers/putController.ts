import { MakeControllerType } from ".";

export const makePutController: MakeControllerType = ({ interactor }) => {
  return async ({ body }) => {
    try {
      const edited = await interactor.edit({ body });
      return {
        statusCode: 200,
        body: edited,
      };
    } catch (e) {
      return {
        statusCode: 400,
        body: (e as Error).message,
      };
    }
  };
};
