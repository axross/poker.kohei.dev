import { Tooltip, TooltipContent, TooltipTrigger } from "components/tooltip";
import { HandRange, Rank } from "holdem";
import { FC, HTMLAttributes, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export interface HandRangeGridProps extends HTMLAttributes<HTMLDivElement> {
  strategy: {
    label: string;
    range: string;
    className?: string;
  }[];
  simplified?: boolean;
}

export const HandRangeGrid: FC<HandRangeGridProps> = ({
  strategy,
  simplified,
  className,
  ...props
}) => {
  const strategyRankPairs = useMemo(() => {
    return strategy.map(({ range }) => {
      let handRange = HandRange.empty();

      try {
        handRange = HandRange.parse(range);
      } catch (error) {
        console.warn(error);
      }

      return handRange.onlyRankPairs();
    });
  }, [strategy]);

  const cells = [];

  for (const [y, yRank] of ranks.entries()) {
    for (let [x, xRank] of ranks.entries()) {
      let rankPair = `${xRank.format()}${yRank.format()}`;

      if (y < x) {
        rankPair = `${yRank.format()}${xRank.format()}s`;
      }

      if (x < y) {
        rankPair = `${xRank.format()}${yRank.format()}o`;
      }

      const probabilities = strategyRankPairs.map(
        (rankPairs) => rankPairs.get(rankPair) ?? 0
      );
      const activeCellBackgrounds = [];

      for (let i = 0; i < probabilities.length; ++i) {
        activeCellBackgrounds.push(
          <div
            className={twMerge(
              "absolute bottom-0 left-0 h-full w-full bg-gray-500 transition-colors",
              strategy[i].className
            )}
            style={{
              height: `${
                probabilities
                  .slice(0, i + 1)
                  .reduce((total, prob) => total + prob, 0) * 100
              }cqw`,
              zIndex: probabilities.length - i + 1,
            }}
            key={`${i}-${strategy[i].label}`}
          />
        );
      }

      activeCellBackgrounds.reverse();

      cells.push(
        <Tooltip disableHoverableContent key={rankPair}>
          <TooltipTrigger className="relative flex cursor-default items-center justify-center overflow-hidden rounded-sm bg-gray-500/10 transition-colors @container dark:bg-gray-400/5">
            <span
              className={twMerge(
                "select-none font-card-symbol text-[45cqw] font-semibold text-gray-700 transition-colors dark:text-white",
                probabilities.every((prob) => prob === 0) &&
                  "text-gray-300 dark:text-white/10"
              )}
            >
              {rankPair}
            </span>

            <div
              className="absolute bottom-0 left-0 z-[1] h-full w-full bg-blue-600 transition-colors"
              style={{
                height: `${
                  probabilities.reduce((total, prob) => total + prob, 0) * 100
                }cqw`,
              }}
            />

            {activeCellBackgrounds}

            <div
              className="absolute bottom-0 left-0 h-full w-full overflow-hidden transition-colors"
              style={{
                height: `${
                  probabilities.reduce((total, prob) => total + prob, 0) * 100
                }cqw`,
                zIndex: probabilities.length + 2,
              }}
            >
              <span className="absolute bottom-[calc((100cqw_-_1em)_/_2)] left-0 inline-block w-full select-none text-center font-card-symbol text-[45cqw] font-semibold leading-none text-white">
                {rankPair}
              </span>
            </div>
          </TooltipTrigger>

          {probabilities.every((prob) => prob === 0) ? null : (
            <TooltipContent>
              {probabilities
                .filter((prob) => prob !== 0)
                .map(
                  (prob, i) =>
                    `${strategy[i].label} ${(prob * 100).toFixed(2)}%`
                )
                .join(" : ")}
            </TooltipContent>
          )}
        </Tooltip>
      );
    }
  }

  return (
    <div
      className={twMerge(
        "grid aspect-square w-64 max-w-full grid-cols-[repeat(13,minmax(0,1fr))] grid-rows-[repeat(13,minmax(0,1fr))] items-stretch justify-items-stretch gap-px rounded-sm",
        className
      )}
      {...props}
    >
      {cells}
    </div>
  );
};

const ranks: Rank[] = [
  Rank.Ace,
  Rank.King,
  Rank.Queen,
  Rank.Jack,
  Rank.Ten,
  Rank.Nine,
  Rank.Eight,
  Rank.Seven,
  Rank.Six,
  Rank.Five,
  Rank.Four,
  Rank.Trey,
  Rank.Deuce,
];
