"use client";

import { useEffect, useState } from "react";

// Types and deletes each word in turn. Decorative: the heading carries the full text for screen readers.
export function Typing({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let word = 0;
    let length = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (deleting) {
        length -= 1;
        if (length === 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
      } else {
        length += 1;
        if (length === words[word].length) deleting = true;
      }
      setText(words[word].slice(0, length));
      const pause = length === words[word].length ? 1900 : deleting ? 35 : 75;
      timer = setTimeout(tick, pause);
    };

    timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
  }, [words]);

  // The longest word sits invisibly in the same grid cell, so the line keeps its height
  // while letters are typed and deleted, even when a word wraps onto two lines.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  return (
    <span aria-hidden="true" className="inline-grid align-top">
      <span className="invisible col-start-1 row-start-1">
        {longest}
        <span className="caret" />
      </span>
      <span className="col-start-1 row-start-1">
        {text}
        <span className="caret" />
      </span>
    </span>
  );
}
