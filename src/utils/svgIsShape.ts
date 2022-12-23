import { Node, parse } from 'svg-parser';

const allowedTagNames = new Set([
  'svg',
  'path',
  'g',
  'metadata',
  'title',
]);

const svgIsShape = (svgContent: string): { isShape: boolean, reason?: string } => {
  const svgParsed = parse(svgContent);
  let reason = '';
  let firstColor: number | string = '';

  const validateSvg = (node: Node | string): boolean => {
    if (typeof node === 'string' || node.type === 'text') return true;

    if (node.tagName && !allowedTagNames.has(node.tagName)) {
      reason = `Este elemento possui em seu corpo a tag "${node.tagName}", impossibilitando a edição`;
      return false;
    }

    if (node.tagName === 'path' && node.properties?.fill) {
      if (!firstColor) firstColor = node.properties.fill;
      if (firstColor && firstColor !== node.properties.fill) {
        reason = 'Este elemento possui em seu corpo "paths" com cores diferentes, impossibilitando a edição';
        return false;
      }
    }

    if (!node.children) return true;

    return node.children.every((child) => validateSvg(child));
  };

  return {
    isShape: validateSvg(svgParsed.children[0]),
    reason: reason || undefined,
  };
};

export default svgIsShape;
