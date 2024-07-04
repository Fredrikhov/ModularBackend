import { TmakeDb } from ".";

export const makeDb: TmakeDb = ({ firebaseDb }) => {
  return {
    findAll: async () => {
      const result = await firebaseDb.collection("blog").get();
      const found = result.docs.map((document) => document.data());
      return found;
    },
    insert: async ({ blogHandler }) => {
      const insertDoc = {
        text: blogHandler.getText(),
      };
      const found = firebaseDb.collection("blog").add(insertDoc);
      return "Successfully added to DB";
    },
    remove: async ({ id }) => {
      const found = firebaseDb.collection("blog").doc(id).delete();
      return "Item deleted";
    },
    update: async ({ blogHandler }) => {
      const insertDoc = {
        text: blogHandler.getText(),
      };
      const docId = blogHandler.getId();
      const found = firebaseDb.collection("blog").doc(docId.id).set(insertDoc);
      return found;
    },
  };
};
