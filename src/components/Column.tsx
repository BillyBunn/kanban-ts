import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from '../store'
import * as actions from '../store/board/actions'
import { ICard } from '../store/board/types'

import Card from './Card'

interface IColumnProps {
  // addCard(payload: { columnId: number; text: string }): void
  addCard: any
  id: number
  cards: ICard[]
  name: string
}

interface IDispatchProps {
  addCard: (payload: string) => void
}

const Column: React.FC<IColumnProps> = ({ name, cards, addCard, id }) => {
  const [newCardEntry, setNewCardEntry] = React.useState('')

  const handleChange = (e: any) => {
    return setNewCardEntry(e.target.value)
  }

  return (
    <div
      style={{
        backgroundColor: '#ECEEEE',
        flex: '1',
        margin: '20px',
        padding: '15px'
      }}
    >
      <h3>{name}</h3>
      <form
        // tslint:disable-next-line: jsx-no-lambda
        onSubmit={e => {
          e.preventDefault()
          addCard({ columnId: id, text: newCardEntry })
          setNewCardEntry('')
        }}
      >
        <input type="text" onChange={handleChange} value={newCardEntry} />
        <input type="submit" value="Add card" />
      </form>
      <div>
        {cards.map(({ text }, idx, arr) => {
          // return <p key={idx}>{text}</p>
          return <Card key={idx} text={text} columnId={id} cardId={idx} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  columns: state.board.columns
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): IDispatchProps => ({
  addCard: payload => {
    return dispatch(actions.addCard(payload))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column)
