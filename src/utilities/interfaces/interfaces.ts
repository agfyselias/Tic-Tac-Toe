export interface IPlayer {
  id: number,
  name: string,
  symbol: string,
}

export interface ITurn {
  symbol: string,
  square: IGameBoardSquare,
}

export interface IGameBoardSquare {
  row: number,
  column: number,
}
