import { Fragment, useEffect, useReducer, useRef } from 'react'
import { reducer, initialState } from '../reducers/Play'
import { useHistory } from 'react-router-dom'

const Game = () => {
  const history = useHistory()
  const inputChoiceNumber = useRef()
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { message, currentNumber, playerChoices, computerChoices, isLoose, isVictory, turn } = state;

  useEffect( () => {
    dispatch({
      type: 'RESET',
    })
  },[])

  useEffect( () => {
    if (turn === "computer") {
      setTimeout( () => {
        dispatch({
          type: 'ADD_COMPUTER_CHOICE',
        })
      }, 1000);
    }
  },[turn])

  const handleReset = (e) => {
    dispatch({
      type: 'RESET',
    })
  }
  const handleSendChoice = (e) => {
    dispatch({
      type: 'ADD_YOUR_CHOICE',
      number: inputChoiceNumber.current.value
    })
  }

  return (
    <Fragment>
      <h1>Game Juniper Green</h1>
      <button onClick={() => history.push("/")}>Back to the home page</button>
      { !isVictory
        ? !isLoose
          ? (
            <Fragment>
              <button onClick={() => history.push("/game/rules")}>Rules</button>
              <button onClick={(e) => handleReset()}>Reset</button>
              <hr/>
              <p>{message}</p>
              <p>Number: {currentNumber}</p>
              { turn === "player"
                ? (
                  <Fragment>
                    <input type="number" placeholder="Enter your choice" ref={inputChoiceNumber}/>
                    <button onClick={(e) => handleSendChoice()}>Send choice</button>
                  </Fragment>
                )
                : (
                  <Fragment>
                    <input type="number" placeholder="Enter your choice" ref={inputChoiceNumber} disabled/>
                    <button onClick={(e) => handleSendChoice()} disabled>Send choice</button>
                  </Fragment>
                )

              }

              <hr/>
              <h3>Your choices :</h3>
              <ul>
                {playerChoices.map((choice, i)=> {
                    return (
                    <li key={`playerChoices${i}`}>{choice}</li>
                    )
                  })}
              </ul>
              <h3>Computer choices :</h3>
              <ul>
                {computerChoices.map((choice, i) => {
                  return (
                    <li key={`computerChoices${i}`}>{choice}</li>
                  )
                })}
              </ul>
            </Fragment>

          )
          : (
            <Fragment>
              <h1>Computer won, you loose</h1>
              <p>{message}</p>
              <button onClick={(e) => window.location.reload(true)}>Replay</button>
              <hr/>
              <h2>Score</h2>
              <h3>Your choices :</h3>
                <ul>
                  {playerChoices.map((choice, i)=> {
                      return (
                      <li key={`playerChoices${i}`}>{choice}</li>
                      )
                    })}
                </ul>
                <h3>Computer choices :</h3>
                <ul>
                  {computerChoices.map((choice, i) => {
                    return (
                      <li key={`computerChoices${i}`}>{choice}</li>
                    )
                  })}
                </ul>
            </Fragment>
          )
        : (
          <Fragment>
            <h1>You are the winner</h1>
            <p>{message}</p>
            <button onClick={(e) => window.location.reload(true)}>Replay</button>
            <hr/>
            <h2>Score</h2>
            <h3>Your choices :</h3>
              <ul>
                {playerChoices.map((choice, i)=> {
                    return (
                    <li key={`playerChoices${i}`}>{choice}</li>
                    )
                  })}
              </ul>
              <h3>Computer choices :</h3>
              <ul>
                {computerChoices.map((choice, i) => {
                  return (
                    <li key={`computerChoices${i}`}>{choice}</li>
                  )
                })}
              </ul>
          </Fragment>
        )
      }
    </Fragment>
  );
}

export default Game;
