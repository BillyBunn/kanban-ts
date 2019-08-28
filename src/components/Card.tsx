import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import * as actions from '../store/board/actions'

interface ICardProps {
  cardId: number
  columnId: number
  text: string
  moveCard: any
}

interface IDispatchProps {
  moveCard: (payload: { columnId: number; cardId: string }) => void
}

const Card: React.FC<ICardProps> = ({ text, columnId, cardId, moveCard }) => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between'
    }}
  >
    <button
      onClick={() => {
        // tslint:disable-next-line: jsx-no-lambda
        moveCard({ columnId, cardId, direction: 'left' })
      }}
    >
      &lt;–
    </button>
    <p>{text}</p>
    <button
      onClick={() => {
        // tslint:disable-next-line: jsx-no-lambda
        moveCard({ columnId, cardId, direction: 'right' })
      }}
    >
      –&gt;
    </button>
  </div>
)

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): IDispatchProps => ({
  moveCard: payload => {
    return dispatch(actions.moveCard(payload))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Card)
