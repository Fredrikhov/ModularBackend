import { MakeControllerType } from ".";

export const makeGetController: MakeControllerType = ({ interactor }) => {
  return async () => {
    try {
      const getAll = await interactor.listAll();
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
