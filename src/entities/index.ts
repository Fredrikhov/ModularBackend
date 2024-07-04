import { blogInterface } from "../Interactors";
import { makeBlog } from "./blog";

export type TmakeBlog = ({}) => {
  ({ text, id }: blogInterface): {
    getText: () => { text: string };
    getId: () => { id: string };
  };
};

export type Tblog = {
  ({ text, id }: blogInterface): {
    getText: () => { text: string };
    getId: () => { id: string };
  };
};

const blog: Tblog = makeBlog({});

export { blog };
