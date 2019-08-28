import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../store'
import { ICard } from '../store/board/types'

interface IColumnProps {
  id: number
  cards: ICard[]
  name: string
}

const Column: React.FC<IColumnProps> = ({ name, cards }) => (
  <div
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
)

const mapStateToProps = (state: AppState) => ({
  columns: state.board.columns
})

export default connect(mapStateToProps)(Column)
