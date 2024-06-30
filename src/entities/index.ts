import { makeBlog } from "./blog";

export type TmakeBlog = ({ text }: { text?: string }) => {
  getText: () => { text: string };
};

const blog = makeBlog({});

export { blog };
