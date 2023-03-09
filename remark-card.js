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
    const rankPairMatch = stringVal.match(
      /([A2-9TJQK][A2-9TJQK][so])(?![a-zB-IL-PRSU-Z])/
    );

    if (rankPairMatch !== null) {
      if (rankPairMatch.index !== 0) {
        newNodes.push(u("text", stringVal.substring(0, rankPairMatch.index)));
      }

      const suited = rankPairMatch[1][2] === "s";
      const suitedCharStartPoint = { line: node.position.start.line, column: rankPairMatch.index + 2, offset: node.position.start.offset + rankPairMatch.index + 2 };
      const suitedCharEndPoint = { line: node.position.start.line, column: rankPairMatch.index + 3, offset: node.position.start.offset + rankPairMatch.index + 3 };

      newNodes.push(
        u("mdxJsxFlowElement", {
          name: "RankPair",
          attributes: [
            { type: "mdxJsxAttribute", name: "highRank", value: rankPairMatch[1][0] },
            { type: "mdxJsxAttribute", name: "kickerRank", value: rankPairMatch[1][1] },
            {
              type: 'mdxJsxAttribute',
              name: 'suited',
              value: {
                type: 'mdxJsxAttributeValueExpression',
                value: suited.toString(),
                data: {
                  estree: {
                    type: 'Program',
                    start: suitedCharStartPoint.offset,
                    end: suitedCharEndPoint.offset,
                    body: [
                      {
                        type: 'ExpressionStatement',
                        expression: {
                          type: 'Literal',
                          start: suitedCharStartPoint.offset,
                          end: suitedCharEndPoint,
                          loc: {
                            start: suitedCharStartPoint,
                            end: suitedCharEndPoint
                          },
                          value: suited,
                          raw: suited.toString(),
                          range: [ suitedCharStartPoint.offset, suitedCharEndPoint ]
                        },
                        start: suitedCharStartPoint.offset,
                        end: suitedCharEndPoint,
                        loc: {
                          start: suitedCharStartPoint,
                          end: suitedCharEndPoint
                        },
                        range: [ suitedCharStartPoint.offset, suitedCharEndPoint ]
                      }
                    ],
                    sourceType: 'module',
                    comments: [],
                    loc: {
                      start: suitedCharStartPoint,
                      end: suitedCharEndPoint
                    },
                    range: [ suitedCharStartPoint.offset, suitedCharEndPoint ]
                  }
                }
              }
            }
          ],
          children: [],
          data: { _mdxExplicitJsx: true },
        })
      );

      stringVal = stringVal.substring(rankPairMatch.index + rankPairMatch[1].length);

      continue;
    }

    const cardMatch = stringVal.match(
      /([A2-9TJQKX][shdcx=])(?![a-zB-IL-PRSU-WY-Z])/
    );

    if (cardMatch !== null) {
      if (cardMatch.index !== 0) {
        newNodes.push(u("text", stringVal.substring(0, cardMatch.index)));
      }

      newNodes.push(
        u("mdxJsxFlowElement", {
          name: "PlayingCard",
          attributes: [
            { type: "mdxJsxAttribute", name: "rank", value: cardMatch[1][0] },
            { type: "mdxJsxAttribute", name: "suit", value: cardMatch[1][1] },
          ],
          children: [],
          data: { _mdxExplicitJsx: true },
        })
      );

      stringVal = stringVal.substring(cardMatch.index + cardMatch[1].length);

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
