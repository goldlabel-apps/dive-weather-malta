import React from "react";

export const useOnScroll = (callback: any) => {
    const listener: any = React.useRef(null);
    React.useEffect(() => {
      if (listener.current)
        window.removeEventListener("scroll", listener.current);
      listener.current = window.addEventListener("scroll", callback);
      return () => {
        window.removeEventListener("scroll", listener.current);
      };
    }, [callback]);
};
