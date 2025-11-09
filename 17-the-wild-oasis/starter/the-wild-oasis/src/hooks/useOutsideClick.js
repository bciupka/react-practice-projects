import { useEffect, useRef } from "react";

export default function useOutsideClick(func, listenInCapturingPhase = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          func();
        }
      }

      document.addEventListener("click", handleClick, listenInCapturingPhase);
      return () =>
        document.removeEventListener(
          "click",
          handleClick,
          listenInCapturingPhase
        );
    },
    [func, listenInCapturingPhase]
  );
  return ref;
}
