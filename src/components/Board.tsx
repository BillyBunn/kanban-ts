import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../store'
import { IColumn } from '../store/board/types'

import Column from './Column'

interface IBoardProps {
  columns: any
}

const Board: React.FC<IBoardProps> = props => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', margin: '25px' }}>
    {props.columns.map(({ name, cards }: IColumn, idx: number) => (
      <Column name={name} cards={cards} id={idx} key={idx} />
    ))}
  </div>
)

const mapStateToProps = (state: AppState) => ({
  columns: state.board.columns
})

export default connect(mapStateToProps)(Board)
