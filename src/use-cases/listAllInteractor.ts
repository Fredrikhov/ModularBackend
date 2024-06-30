import { TmakeListAll } from ".";

export const makeListAll: TmakeListAll = ({ db }) => {
  return async () => {
    const result = await db.findAll();
    return result;
  };
};
