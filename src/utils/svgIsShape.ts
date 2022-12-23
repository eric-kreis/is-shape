import { Node, parse } from 'svg-parser';

const allowedTagNames = new Set([
  'svg',
  'path',
  'g',
  'metadata',
  'title',
]);

const reasonStartMessage = 'Este elemento não é um shape porque possui em seu corpo';

const svgIsShape = (svgContent: string): { isShape: boolean, reason?: string } => {
  const svgParsed = parse(svgContent);
  let reason = '';
  let firstColor: number | string = '';

  const validateSvg = (node: Node | string): boolean => {
    if (typeof node === 'string' || node.type === 'text') return true;

    if (node.tagName && !allowedTagNames.has(node.tagName)) {
      reason = `${reasonStartMessage} a tag "${node.tagName}"`;
      return false;
    }

    if (node.tagName === 'path') {
      if (node.properties?.style) {
        reason = `${reasonStartMessage} "paths" com estilos complexos`;
        return false;
      }

      if (node.properties?.fill) {
        if (!firstColor) firstColor = node.properties.fill;
        if (firstColor && firstColor !== node.properties.fill) {
          reason = `${reasonStartMessage} "paths" com cores diferentes`;
          return false;
        }
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
