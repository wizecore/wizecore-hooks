import { useEffect, useLayoutEffect } from "react";

/**
 * Use the layout effect on the client and the effect on the server.
 */
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
