import { Rank, Suit } from "holdem";

export function safeParseRank(char: string): Rank | null {
  try {
    return Rank.parse(char);
  } catch (_) {
    return null;
  }
}

export function safeParseSuit(char: string): Suit | null {
  try {
    return Suit.parse(char);
  } catch (_) {
    return null;
  }
}
