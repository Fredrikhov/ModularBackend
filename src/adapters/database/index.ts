import admin, { firestore } from "firebase-admin";
import dotenv from "dotenv";
import { makeDb } from "./makeDb";
dotenv.config();

if (process.env.serviceAccount != undefined) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.serviceAccount)),
    databaseURL:
      "https://modularbackend-70427-default-rtdb.europe-west1.firebasedatabase.app",
  });
}

const firebaseDb = admin.firestore();

export type TmakeDb = ({ firebaseDb }: { firebaseDb: firestore.Firestore }) => {
  findAll: () => Promise<FirebaseFirestore.DocumentData[]>;
  insert: ({
    blogHandler,
  }: {
    blogHandler: { getText: () => { text: string } };
  }) => Promise<string>;
  remove: () => void;
  update: () => void;
};

export type TDb = {
  findAll: () => Promise<FirebaseFirestore.DocumentData[]>;
  insert: ({
    blogHandler,
  }: {
    blogHandler: { getText: () => { text: string } };
  }) => Promise<string>;
  remove: () => void;
  update: () => void;
};

const db: TDb = makeDb({ firebaseDb });

export { db };
