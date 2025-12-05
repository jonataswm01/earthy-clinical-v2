"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";

type SmoothScrollingProps = {
  children: ReactNode;
};

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlBehavior = html.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "smooth";
    body.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollBehavior = previousHtmlBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    };
  }, []);

  return <>{children}</>;
}

