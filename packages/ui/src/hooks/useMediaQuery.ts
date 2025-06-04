'use client';

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}


export function useSmSize() {
  return useMediaQuery("(min-width: 640px)");
}
export function useMdSize() {
  return useMediaQuery("(min-width: 768px)");
}
export function useLgSize() {
  return useMediaQuery("(min-width: 1024px)");
}
export function useXlSize() {
  return useMediaQuery("(min-width: 1280px)");
}
export function use2xlSize() {
  return useMediaQuery("(min-width: 1536px)");
}
