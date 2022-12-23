import { Node, parse } from 'svg-parser';

const allowedTagNames = new Set([
  'svg',
  'path',
  'g',
  'metadata',
  'title',
]);

const svgIsShape = (svgContent: string): boolean => {
  const svgParsed = parse(svgContent);

  let firstColor: number | string = '';

  const validateSvg = (node: Node | string): boolean => {
    if (typeof node === 'string' || node.type === 'text') return true;

    if (node.tagName && !allowedTagNames.has(node.tagName)) return false;

    if (node.tagName === 'path' && node.properties?.fill) {
      if (!firstColor) firstColor = node.properties.fill;
      if (firstColor && firstColor !== node.properties.fill) return false;
    }

    if (!node.children) return true;

    return node.children.every((child) => validateSvg(child));
  };

  return validateSvg(svgParsed.children[0]);
};

export default svgIsShape;
