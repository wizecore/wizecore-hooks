import { useEffect, useState } from "react";

/**
 * Parse the user agent string to determine if the user is using Safari on an iPhone or iPad.
 */
export const useUserAgent = () => {
  const [userAgent, setUserAgent] = useState<string | undefined>(undefined);
  useEffect(() => {
    setUserAgent(window.navigator.userAgent);
  }, []);

  return {
    userAgent,
    Safari: userAgent?.includes("Safari") && !userAgent?.includes("Chrome"),
    iPhone: userAgent?.includes("Safari") && userAgent?.includes("iPhone"),
    iPad: userAgent?.includes("Safari") && userAgent?.includes("iPad"),
  };
};
