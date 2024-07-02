import { TDb, db } from "../adapters/database";
import { Tblog, blog } from "../entities";
import { makeInteractor } from "./makeInteractor";

export type TmakeInteractor = ({ db, blog }: { db: TDb; blog: Tblog }) => {
  add: (blogInfo: { text: string }) => Promise<string>;
  listAll: () => Promise<FirebaseFirestore.DocumentData[]>;
};

export type Tinteractor = {
  add: (cblogInfo: { text: string }) => Promise<string>;
  listAll: () => Promise<FirebaseFirestore.DocumentData[]>;
};

const interactor: Tinteractor = makeInteractor({ db, blog });

export { interactor };
