import { TmakeInteractor } from ".";

export const makeInteractor: TmakeInteractor = ({ db, blog }) => {
  return {
    add: async ({ body }) => {
      const blogHandler = blog(body);
      return db.insert({ blogHandler });
    },
    listAll: async () => {
      const result = await db.findAll();
      return result;
    },
    edit: async ({ body }) => {
      if (body.id === undefined || body.id.length < 10) {
        throw new Error("A blog must contain an id.");
      }
      const blogHandler = blog(body);
      const result = await db.update({ blogHandler });
      return result;
    },
    remove: async ({ body }) => {
      const id = body.id;
      if (id === undefined || id.length < 10) {
        throw new Error("A action need an id.");
      }
      const result = await db.remove({ id });
      return result;
    },
  };
};
