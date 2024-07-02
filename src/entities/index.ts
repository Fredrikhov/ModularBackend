import { makeBlog } from "./blog";

export type TmakeBlog = ({}) => {
  ({ text }: { text: string }): { getText: () => { text: string } };
};

export type Tblog = {
  ({ text }: { text: string }): { getText: () => { text: string } };
};

const blog: Tblog = makeBlog({});

export { blog };
