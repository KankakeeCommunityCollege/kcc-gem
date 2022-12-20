const pipe = (str, ...fns) => fns.reduce(
  (x, f) => f(x),
  str
);

const embolden = str => str.replace(
  /[\*_]{2}([^\*_]+)[\*_]{2}/g,
  `<strong>$1</strong>`
);

const emphasize = str => str.replace(
  /[\*_]([^\*_]+)[\*_]/g,
  `<em>$1</em>`
);

const linkify = str => str.replace(
  /\[([^\]]+)\]\(([^\)]+)\)/g,
  `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
);

const paragraphize = str => str.replace(
  /^(.*)$/gm,
  (match, p1) => p1 === '' ? match : `<p class="typography__alert">${p1}</p>`
);

function escapeCharacters(string, escapeOption) {
  const escapedCharactersObject = {
    '\\*': '__asterisk__',
    '\\_': '__underscore__',
    '\\[': '__openBracket__',
    '\\]': '__closeBracket__',
    '\\(': '__openParenthesis__',
    '\\)': '__closeParenthesis__'
  }

  for (let char in escapedCharactersObject) {
    if (escapedCharactersObject.hasOwnProperty(char)) {
      let rep = escapedCharactersObject[char];

      if (escapeOption === true) {
        string = string.replace(char, rep);
      }
      string = string.replace(rep, char);
    }
  }
  return string;
}

function parseMarkdownToHTML(string) {
  const escapedString = escapeCharacters(string, true);
  const html = pipe(escapedString,
    embolden,
    emphasize,
    linkify,
    paragraphize
  );

  return escapeCharacters(html, false);
}

//
//    USAGE:
//        import parseMarkdownToHTML from './parseMarkdownToHTML.js';
//
//        parseMarkdownToHTML(stringContainingSimplifiedMarkdown);

export default parseMarkdownToHTML;
