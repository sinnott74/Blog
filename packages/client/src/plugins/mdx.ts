import gfm from "remark-gfm";
// @ts-ignore
import rehypePrism from "@mapbox/rehype-prism";
import { SourceMapGenerator } from "source-map";
import importESM from "../../.storybook/import-esm";

export default async () => {
    const mdx = (await importESM("@mdx-js/rollup")).default;
    const frontmatter = (await importESM("remark-frontmatter")).default;
    const remarkMdxFrontmatter = (await importESM("remark-mdx-frontmatter")).remarkMdxFrontmatter;
    const unwrapImages = (await importESM("remark-unwrap-images")).default;

    // `options` are passed to `@mdx-js/mdx`
    const options = {
        // See https://mdxjs.com/advanced/plugins
        remarkPlugins: [gfm, frontmatter, remarkMdxFrontmatter, unwrapImages],
        // E.g. `remark-frontmatter`
        rehypePlugins: [rehypePrism],
        providerImportSource: "@mdx-js/react",
        SourceMapGenerator,
    };

    return () => mdx(options);
};
