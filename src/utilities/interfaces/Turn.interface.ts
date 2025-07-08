import type { IGameBoardSquare } from "./GameBoardSquare.interface";

export interface ITurn {
  symbol: string,
  square: IGameBoardSquare,
}
