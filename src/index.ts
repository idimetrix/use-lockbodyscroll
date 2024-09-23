import { useEffect, useCallback } from "react";

export const useLockBodyScroll = () => {
  const lockScroll = useCallback(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return originalStyle;
  }, []);

  const unlockScroll = useCallback((originalStyle: string) => {
    document.body.style.overflow = originalStyle;
  }, []);

  useEffect(() => {
    const originalStyle = lockScroll();

    return () => unlockScroll(originalStyle);
  }, [lockScroll, unlockScroll]);

  return { lockScroll, unlockScroll };
};
