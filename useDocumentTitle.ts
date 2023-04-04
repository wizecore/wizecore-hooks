import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/**
 * Sets the document title.
 */
export const useDocumentTitle = (title: string) => {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title;
  }, [title]);
};
