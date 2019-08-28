export interface ICard {
  text: string
}

export interface IColumn {
  cards: ICard[]
  name: string
}

export interface IBoardState {
  columns: IColumn[]
}
