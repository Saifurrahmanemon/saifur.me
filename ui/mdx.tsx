/* eslint-disable no-useless-escape */
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image, { ImageProps } from 'next/image';
import React from 'react';
import { highlight } from 'sugar-high';

const CustomImage = (props: ImageProps) => {
  return <Image className="rounded-lg" {...props} alt={props.alt} />;
};

type CodeProps = {
  children: string;
} & React.HTMLProps<HTMLElement>;

const Code: React.FC<CodeProps> = ({ children, ...props }) => {
  const codeHTML: string = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

type EmojiCalloutProps = {
  emoji: React.ReactNode;
  children: React.ReactNode;
};

const EmojiCallout: React.FC<EmojiCalloutProps> = ({ emoji, children }) => {
  return (
    <div className="p-2 mx-auto overflow-hidden border rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 border-secondary">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-4">{emoji}</div>
        <div className="ml-4 text-sm text-semibold">{children}</div>
      </div>
    </div>
  );
};

const whitespaceRegex = /\s+/g;
const ampersandRegex = /&/g;
const nonWordCharRegex = /[^\w\-]+/g;
const multipleHyphenRegex = /\-\-+/g;

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(whitespaceRegex, '-')
    .replace(ampersandRegex, '-and-')
    .replace(nonWordCharRegex, '')
    .replace(multipleHyphenRegex, '-');
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: string }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor'
        })
      ],
      children
    );
  };
}
export const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  code: Code,
  Callout: EmojiCallout,
  Image: CustomImage
};

export function CustomMDXRemote(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
