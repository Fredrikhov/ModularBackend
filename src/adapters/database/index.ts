import admin, { firestore } from "firebase-admin";
import dotenv from "dotenv";
import { makeDb } from "./makeDb";
import { blogInterface } from "../../Interactors";

export type TmakeDb = ({ firebaseDb }: { firebaseDb: firestore.Firestore }) => {
  findAll: () => Promise<FirebaseFirestore.DocumentData[]>;
  insert: ({
    blogHandler,
  }: {
    blogHandler: BlogHandlerInterface;
  }) => Promise<string>;
  remove: (id: { id: string }) => Promise<string>;
  update: ({
    blogHandler,
  }: {
    blogHandler: BlogHandlerInterface;
  }) => Promise<firestore.DocumentData>;
};

export type TDb = {
  findAll: () => Promise<FirebaseFirestore.DocumentData[]>;
  insert: ({
    blogHandler,
  }: {
    blogHandler: BlogHandlerInterface;
  }) => Promise<string>;
  remove: (id: { id: string }) => Promise<string>;
  update: ({
    blogHandler,
  }: {
    blogHandler: BlogHandlerInterface;
  }) => Promise<firestore.DocumentData>;
};

interface BlogHandlerInterface {
  getText: () => { text: string };
  getId: () => { id: string };
}

dotenv.config();

if (process.env.serviceAccount != undefined) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.serviceAccount)),
    databaseURL:
      "https://modularbackend-70427-default-rtdb.europe-west1.firebasedatabase.app",
  });
}

const firebaseDb = admin.firestore();

const db: TDb = makeDb({ firebaseDb });

export { db };
