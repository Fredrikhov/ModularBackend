import { TmakeDb } from ".";
import { blog } from "../../entities";

export const makeDb: TmakeDb = ({ firebaseDb }) => {
  return {
    findAll: async () => {
      const result = await firebaseDb.collection("blog").get();
      const found = result.docs.map((document) => document.data());
      return found;
    },

    insert: async ({ blogHandler }) => {
      const blogData = blogHandler.getText();
      const result = firebaseDb.collection("blog").add(blogData);
      return "Successfully added to DB";
    },

    remove: () => {},

    update: () => {},
  };
};
