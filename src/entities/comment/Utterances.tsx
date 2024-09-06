'use client';

export default function Utterances() {
  return (
    <section
      ref={(el) => {
        if (!el) return;

        const scriptEl = document.createElement('script');

        scriptEl.src = 'https://utteranc.es/client.js';
        scriptEl.async = true;
        scriptEl.crossOrigin = 'anonymous';
        scriptEl.setAttribute('repo', 'benzyminzy/my-blog-space');
        scriptEl.setAttribute('issue-term', 'pathname');
        scriptEl.setAttribute('label', 'Comment');
        scriptEl.setAttribute('theme', 'github-light');

        el.appendChild(scriptEl);
      }}
    ></section>
  );
}
