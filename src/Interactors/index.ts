import { TDb, db } from "../adapters/database";
import { Tblog, blog } from "../entities";
import { makeInteractor } from "./makeInteractors";

export type TmakeInteractor = ({ db, blog }: { db: TDb; blog: Tblog }) => {
  add: ({ body }: { body: blogInterface }) => Promise<string>;
  listAll: () => Promise<FirebaseFirestore.DocumentData[]>;
  edit: ({
    body,
  }: {
    body: blogInterface;
  }) => Promise<FirebaseFirestore.DocumentData>;
  remove: ({ body }: { body: blogInterface }) => Promise<string>;
};

export type Tinteractor = {
  add: ({ body }: { body: blogInterface }) => Promise<string>;
  listAll: () => Promise<FirebaseFirestore.DocumentData[]>;
  edit: ({
    body,
  }: {
    body: blogInterface;
  }) => Promise<FirebaseFirestore.DocumentData>;
  remove: ({ body }: { body: blogInterface }) => Promise<string>;
};

export interface blogInterface {
  text: string;
  id: string;
}

const interactor: Tinteractor = makeInteractor({ db, blog });

export { interactor };
