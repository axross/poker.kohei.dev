const visit = require("unist-util-visit-parents");
const u = require("unist-builder");

function remarkCard() {
  return transform;
}

function transform(tree) {
  visit(tree, "text", onVisitText);
}

function onVisitText(node, parents) {
  const newNodes = [];
  let stringVal = String(node.value);
  let lastCursor = 0;
  let i = 0;

  while (stringVal.length >= 1) {
    const match = stringVal.match(
      /(@[A2-9TJQKX][shdcx=])(?![a-zB-IL-PRSU-WY-Z])/
    );

    if (match !== null) {
      if (match.index !== 0) {
        newNodes.push(u("text", stringVal.substring(0, match.index)));
      }

      newNodes.push(
        u("mdxJsxFlowElement", {
          name: "PlayingCard",
          attributes: [
            { type: "mdxJsxAttribute", name: "rank", value: match[1][1] },
            { type: "mdxJsxAttribute", name: "suit", value: match[1][2] },
          ],
          children: [],
          data: { _mdxExplicitJsx: true },
        })
      );

      stringVal = stringVal.substring(match.index + match[1].length);

      continue;
    }

    newNodes.push(u("text", stringVal));

    stringVal = "";
  }

  parents[parents.length - 1].children.splice(
    parents[parents.length - 1].children.indexOf(node),
    1,
    ...newNodes
  );
}

module.exports = remarkCard;
