/**

=========================================================
=                                                       =
=           Special Acknowledgment and Shout-out        =
=                                                       =
=========================================================

This section of code draws inspiration and derives from
the exceptional work by Leerob. His insightful and
innovative contributions served as the foundation for
this implementation.

Leerob's blog: https://leerob.io/blog/2023

 **/

import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content
    };
  });
}

export function getWritings() {
  return getMDXData(path.join(process.cwd(), 'content'));
}

export function getSortedWritings() {
  return getWritings()?.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).valueOf() -
      new Date(a.metadata.publishedAt).valueOf()
    );
  });
}
