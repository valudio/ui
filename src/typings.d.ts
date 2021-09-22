declare module '*.ttf';
declare module '*.eot';
declare module '*.woff';
declare module '*.woff2';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}