import { TDb, db } from "../adapters/database";
import { makeAddInteractor } from "./addInteractor";
import { makeListAll } from "./listAllInteractor";

export type TmakeListAll = ({
  db,
}: {
  db: TDb;
}) => () => Promise<FirebaseFirestore.DocumentData[]>;

export type TmakeAddInteractor = ({ db }: { db: TDb }) => ({}: {}) => object;
const listAllInteractor = makeListAll({ db });
const addInteractor = makeAddInteractor({ db });

export { listAllInteractor, addInteractor };
