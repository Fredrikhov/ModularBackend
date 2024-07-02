import { makeGetController } from "./getController";
import { HttpRequest, HttpResponse } from "../middlewares";
import { makePostController } from "./postController";
import { Tinteractor, interactor } from "../../../use-cases";

export type TmakeGetController = ({
  interactor,
}: {
  interactor: Tinteractor;
}) => (HttpRequest: HttpRequest) => Promise<HttpResponse>;

export type TmakePostController = ({
  interactor,
}: {
  interactor: Tinteractor;
}) => (HttpRequest: HttpRequest) => Promise<HttpResponse>;

const getController = makeGetController({ interactor });
const postController = makePostController({ interactor });

export { getController, postController };
