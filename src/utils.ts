import { Container } from './interface';

export const getContainer = (
  container?: Container,
): HTMLElement | undefined => {
  if (typeof container === 'function') {
    return container();
  }
  if (
    typeof container === 'object' &&
    container instanceof window.HTMLElement
  ) {
    return container;
  }
  return undefined;
};
