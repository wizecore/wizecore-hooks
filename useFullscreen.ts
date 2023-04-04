import { MutableRefObject, RefObject, useCallback, useEffect } from "react";

interface DocumentFullscreen extends Document {
  fullscreenEnabled: boolean;
  webkitFullscreenEnabled?: boolean;
  mozFullScreenEnabled?: boolean;
  msFullscreenEnabled?: boolean;
  webkitIsFullScreen?: boolean;
  mozFullScreen?: boolean;
  msFullscreenElement?: Element;
}

interface CrossBrowserFullscreen extends HTMLIFrameElement {
  requestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  webkitRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
  mozRequestFullScreen?: (options?: FullscreenOptions) => Promise<void>;
  msRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
}

/** Request full screen for a specified iframe element */
export const useFullscreen = (
  ref: RefObject<HTMLIFrameElement | HTMLDivElement>,
  options = {
    onEnter: () => {},
    onError: (err: Error) => {},
    onExit: () => {},
  }
) => {
  const enter = useCallback(() => {
    // check if fullscreen mode is available
    const doc = document as DocumentFullscreen;
    if (doc.fullscreenEnabled || doc.webkitFullscreenEnabled || doc.mozFullScreenEnabled || doc.msFullscreenEnabled) {
      // which element will be fullscreen
      var element = ref.current as CrossBrowserFullscreen;
      // Do fullscreen
      if (element?.requestFullscreen) {
        element?.requestFullscreen();
      } else if (element?.webkitRequestFullscreen) {
        element?.webkitRequestFullscreen();
      } else if (element?.mozRequestFullScreen) {
        element?.mozRequestFullScreen();
      } else if (element?.msRequestFullscreen) {
        element?.msRequestFullscreen();
      }
    } else {
      options?.onError(new Error("Your browser is not supported"));
    }
  }, [ref, options]);

  useEffect(() => {
    function fullscreenChange() {
      const doc = document as DocumentFullscreen;
      if (doc.fullscreenElement || doc.webkitIsFullScreen || doc.mozFullScreen || doc.msFullscreenElement) {
        options?.onEnter();
      } else {
        options?.onExit();
      }
    }

    function fullscreenError(event: Event) {
      options?.onError(new Error("Fullscreen error " + event.type));
    }

    document.addEventListener("webkitfullscreenchange", fullscreenChange);
    document.addEventListener("mozfullscreenchange", fullscreenChange);
    document.addEventListener("fullscreenchange", fullscreenChange);
    document.addEventListener("MSFullscreenChange", fullscreenChange);
    document.addEventListener("fullscreenerror", fullscreenError);

    return () => {
      document.removeEventListener("webkitfullscreenchange", fullscreenChange);
      document.removeEventListener("mozfullscreenchange", fullscreenChange);
      document.removeEventListener("fullscreenchange", fullscreenChange);
      document.removeEventListener("MSFullscreenChange", fullscreenChange);
      document.removeEventListener("fullscreenerror", fullscreenError);
    };
  });

  return enter;
};
