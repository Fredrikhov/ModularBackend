import { TmakeInteractor } from ".";

export const makeInteractor: TmakeInteractor = ({ db, blog }) => {
  return {
    add: async (blogInfo) => {
      const blogHandler = blog(blogInfo);
      return db.insert({ blogHandler });
    },
    listAll: async () => {
      const result = await db.findAll();
      return result;
    },
  };
};
