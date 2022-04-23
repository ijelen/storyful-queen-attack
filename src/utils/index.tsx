import { Position } from "../ChessBoardField";

export const canAttack = (white: Position, black: Position): boolean => {
  if (
    white[0] === black[0] ||
    white[1] === black[1] ||
    white[0] - white[1] === black[0] - black[1] ||
    white[0] + white[1] === black[0] + black[1]
  ) {
    return true;
  } else return false;
};
