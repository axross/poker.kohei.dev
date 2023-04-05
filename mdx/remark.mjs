import { mdxAnnotations } from "mdx-annotations";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";

export const remarkPlugins = [mdxAnnotations.remark, remarkGfm, remarkMath];
