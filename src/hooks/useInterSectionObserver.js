import { useEffect, useRef } from "react";

export const useInterSectionObserver = (
  elementRef,
  setLoaded,
  threshold,
  lazy,
  observer,
) => {
  const handleLoadComp = useRef(() => setLoaded(true));

  useEffect(() => {
    if (!lazy) return;
    const element = elementRef?.current;
    if (!element) return;

    const handleLoad = handleLoadComp.current;

    element.addEventListener("@loadElement", handleLoad);
    return () => {
      element.removeEventListener("@loadElement", handleLoad);
    };
  }, [lazy, elementRef]);

  useEffect(() => {
    if (!lazy || observer || !elementRef?.current) return;

    const intersectionCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        entry.target.dispatchEvent(new CustomEvent("@loadElement"));
      });
    };

    observer = new IntersectionObserver(intersectionCallback, { threshold });
    observer.observe(elementRef.current);
  }, [lazy, threshold, observer]);
};
