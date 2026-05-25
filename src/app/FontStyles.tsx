"use client";

export default function FontStyles() {
  return (
    <style jsx global>{`
      p, a, button, li, label, input, textarea, select {
        font-family: 'Elms Sans', sans-serif !important;
      }
      h1, h2, h3, h4, h5, h6, h1 span, h2 span, h3 span, h4 span, h5 span, h6 span {
        font-family: 'Zalando Sans Expanded', sans-serif !important;
      }
    `}</style>
  );
}
