import { TmakeBlog, blog } from ".";

export const makeBlog: TmakeBlog = ({}) => {
  return ({ text, id }) => {
    if (text === undefined) throw new Error("Text is undefined");

    if (text.length <= 1) throw new Error("Text cannot be empty");

    if (typeof text !== "string")
      throw new Error("Data is not a supported type");
    return {
      getText: () => {
        return { text };
      },
      getId: () => {
        return { id };
      },
    };
  };
};
