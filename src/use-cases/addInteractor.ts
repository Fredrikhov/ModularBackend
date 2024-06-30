import { TmakeAddInteractor } from ".";
import { makeBlog } from "../entities/blog";

export const makeAddInteractor: TmakeAddInteractor = ({ db }) => {
  return async (commentInfo) => {
    const blogHandler = makeBlog(commentInfo);
    return db.insert({ blogHandler });
  };
};
