import { MIN_NUMBER, MAX_NUMBER } from '../constants/Actions';

export const initialState = {
  message: '',
  currentNumber: -1,
  playerChoices: [],
  computerChoices: [],
  isLoose: false,
  isVictory: false,
  turn: 'player',
}

const verifySendingNumber = (playerChoices, computerChoices, number) => {
  for (let i = 0; i < playerChoices.length || i < computerChoices.length; i++) {
    if (playerChoices[i] === number) {
      return true
    } else if (computerChoices[i] === number) {
      return false
    }
  }
}

const verifyNumber = (number) => {
  if (number > MIN_NUMBER && number < MAX_NUMBER)  {
    return false
  } else {
    for (let i = MIN_NUMBER+1; i < MAX_NUMBER; i++) {
      if (i % number) {
        // c'est un diviseur commun
        console.log('Ok : Diviseur');
        return true
      } else {
        for (let j = MIN_NUMBER+1; j < MAX_NUMBER; j++) {
          if ((j * i) === number) {
            // c'est un multiple
            console.log('Ok : Multiple');
            return true
          }
        }
      }
    }
    return false
  }
}

export const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_YOUR_CHOICE':
      const isAlreadySend = verifySendingNumber(state.playerChoices, state.computerChoices, action.number)
      const isNotDivisorOrMultiple = verifyNumber(action.number)

      if (isNotDivisorOrMultiple) {
        return {
          ...state,
          message: state.message = "Is not multiple or divisor",
          isLoose: state.isLoose = true
        }
      }

      if (isAlreadySend) {
        return {
          ...state,
          message: state.message = "This number was already send",
          isLoose: state.isLoose = true
        }
      } else if (action.number) {
        return {
          ...state,
          message: state.message = `You send ${action.number}, computer playing`,
          currentNumber: action.number,
          playerChoices: state.playerChoices.concat(action.number),
          turn: state.turn = "computer"
        }
      } else {
        return {
          ...state,
          message: state.message = "Sorry, is not a correct entry, please resend"
        }
      }

    case 'ADD_COMPUTER_CHOICE':
      // Algo determinage partiel d'un coup
      // let iaResultat = null
      // for (let i = MIN_NUMBER+1; i < MAX_NUMBER; i++) {
      //   if (i % state.currentNumber && !state.computerChoices.includes(i) && !state.playerChoices.includes(i)) {
      //     // c'est un diviseur commun
      //     iaResultat = i
      //   } else {
      //     for (let j = MIN_NUMBER+1; j < MAX_NUMBER; j++) {
      //       if ((j * i) === state.currentNumber && !state.computerChoices.includes(j) && !state.playerChoices.includes(j)) {
      //         // c'est un multiple
      //         iaResultat = j
      //       }
      //     }
      //   }
      // }

      let iaResultat = Math.floor(Math.random() * (100 - 0) + 0)
      if (verifyNumber(iaResultat) && !state.computerChoices.includes(iaResultat) && !state.playerChoices.includes(iaResultat)){
        return {
          ...state,
          message: state.message = "It is your turn",
          currentNumber: iaResultat,
          computerChoices: state.computerChoices.concat(iaResultat),
          turn: state.turn = "player"
        }
      } else {
        return {
          ...state,
          message: state.message = "You won the game",
          currentNumber: iaResultat,
          computerChoices: state.computerChoices.concat(iaResultat),
          isVictory: state.isVictory = true
        }
      }

    case 'RESET':
      return {
        ...state,
        message: '',
        currentNumber: state.currentNumber = Math.floor(Math.random() * (100 - 0) + 0),
        playerChoices: [],
        computerChoices: [],
        isLoose: false,
        turn: 'player'
      }
    default:
      console.log('Play Reducer', 'unrecognised type')
      return {
        ...state
      }
  }
}
