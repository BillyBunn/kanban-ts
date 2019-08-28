import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../store'
import { IColumn } from '../store/board/types'

interface IBoardProps {
  columns: any
}

const Board: React.FC<IBoardProps> = props => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', margin: '25px' }}>
    {props.columns.map(({ name, cards }: IColumn, idx: number) => (
      <div
        key={idx}
        style={{
          backgroundColor: '#ECEEEE',
          flex: '1',
          margin: '20px',
          padding: '15px'
        }}
      >
        <h3>{name}</h3>
        <div>
          {cards.map(({ text }, idx) => {
            return <p key={idx}>{text}</p>
          })}
        </div>
      </div>
    ))}
  </div>
)

const mapStateToProps = (state: AppState) => ({
  columns: state.board.columns
})

export default connect(mapStateToProps)(Board)
