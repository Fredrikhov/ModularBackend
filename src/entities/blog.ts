import { TmakeBlog } from ".";

export const makeBlog: TmakeBlog = ({ text } = {}) => {
  if (text === undefined) {
    throw new Error("Text is undefined");
  }
  if (text.length < 1) {
    throw new Error("text cannot be empty");
  }
  if (typeof text !== "string") {
    throw new Error("Text must be a string");
  }
  return {
    getText: () => {
      return { text };
    },
  };
};
