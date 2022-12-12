// Replace all occurrences of "--" (double-hyphens,) within the page with em-dashes.
// Use a replacer function to filter out triple-hyphens ("---") which may appear in our documentation.
// For example, YAML Front - matter's opening and closing triple-hyphens
// ===================================================================================================== //
// [NOTE]:
// The ideal solution would use RegEx w/ negative lookahead and negative lookbehind
// However, lookbehind assertion has very poor support (Webpack doesn't even like it.)
//   const strictDoubleDashRegex = /(?>!-)--(?!-)/g;
// The above regex with lookbehind assertion may work in the future as support grows.
const emDashOrTripleHyphensRegex = /---?/g;
const tripleHyphenRegex = /---/;
const emDash = '—' // This is an em-dash, however, it looks like a hyphen in your monospace text editor font!

// Without the replacer function, triple-hyphens get replaced with an em-dash and a hyphen.
function replacerFunction(match) {
  return match.search(tripleHyphenRegex) === -1 ? emDash : match;
}

function walkText() {
  let currentNode;
  const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_TEXT,
    (node) => (node.nodeValue.search(emDashOrTripleHyphensRegex) !== -1) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  );

  while (currentNode = nodeIterator.nextNode()) {
    currentNode.data = currentNode.data.replace(emDashOrTripleHyphensRegex, replacerFunction);
  }
}

export default walkText;
