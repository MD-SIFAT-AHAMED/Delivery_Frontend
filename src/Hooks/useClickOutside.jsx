import { useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {

      if (!ref.current) return;

      if (!ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("pointerdown", handleClick, true);

    return () => {
      document.removeEventListener("pointerdown", handleClick, true);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
