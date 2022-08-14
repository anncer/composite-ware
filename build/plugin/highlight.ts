// copy from [vitepress](https://github.com/vuejs/vitepress)
import prismjs from "prismjs";
import escapeHtml from "escape-html";

function wrap(code: string, lang: string): string {
  if (lang === "text") {
    code = escapeHtml(code);
  }
  return `<pre v-pre><code>${code}</code></pre>`;
}

export default (str: string, lang: string): string => {
  if (!lang) {
    return wrap(str, "text");
  }
  lang = lang.toLowerCase();
  const rawLang = lang;
  if (lang === "vue" || lang === "html") {
    lang = "markup";
  }
  if (lang === "md") {
    lang = "markdown";
  }
  if (lang === "ts") {
    lang = "typescript";
  }
  if (lang === "py") {
    lang = "python";
  }
  if (prismjs.languages[lang]) {
    const code = prismjs.highlight(str, prismjs.languages[lang], lang);
    return wrap(code, rawLang);
  }
  return wrap(str, "text");
};
