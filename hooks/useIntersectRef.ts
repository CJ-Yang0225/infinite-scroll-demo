import React, { useRef, useEffect, useState, useCallback } from "react";

const defaultOptions = {
  threshold: 1.0,
  root: null,
  rootMargin: "-16px",
};

function useIntersectRef(emitIntersect: () => void, options = defaultOptions) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetNode = ref?.current;

    if (!targetNode) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          emitIntersect();
        }
      },
      options
    );

    observer.observe(targetNode);

    return () => observer.disconnect();
  }, [ref, options, emitIntersect]);

  return ref;
}

export default useIntersectRef;
