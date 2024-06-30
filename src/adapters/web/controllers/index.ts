import { addInteractor, listAllInteractor } from "../../../use-cases";
import { makeGetController } from "./getController";
import { HttpRequest, HttpResponse } from "../middlewares";
import { makePostController } from "./postController";

export type TmakeGetController = ({
  listAllInteractor,
}: {
  listAllInteractor: () => Promise<FirebaseFirestore.DocumentData[]>;
}) => (HttpRequest: HttpRequest) => Promise<HttpResponse>;

export type TmakePostController = ({
  addInteractor,
}: {
  addInteractor: ({}) => object;
}) => (HttpRequest: HttpRequest) => Promise<HttpResponse>;

const getController = makeGetController({ listAllInteractor });
const postController = makePostController({ addInteractor });

export { getController, postController };
