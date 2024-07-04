import { makeGetController } from "./getController";
import { HttpRequest, HttpResponse } from "../middlewares/withHttpMiddleware";
import { makePostController } from "./postController";
import { Tinteractor, blogInterface, interactor } from "../../../Interactors";
import { makePutController } from "./putController";
import { makeDeleteController } from "./deleteController";

export type MakeControllerType = ({
  interactor,
}: {
  interactor: Tinteractor;
}) => ({ body }: { body: blogInterface }) => Promise<HttpResponse>;

export const getController = makeGetController({ interactor });
export const postController = makePostController({ interactor });
export const putController = makePutController({ interactor });
export const deleteController = makeDeleteController({ interactor });
