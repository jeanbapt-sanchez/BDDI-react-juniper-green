import { useReducer, useEffect } from "react";

import Circle from "./Styles/Circle";
import Button from "./Styles/Button";
import Container from "./Styles/Container";

import { initialState, reducer } from "./reducers/circle";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { circles, number, easter_eggs } = state;

  useEffect(() => {
    if( number > 0 && number % 7 === 0 ){
      dispatch({type :'EASTER_EGGS', number : number})
    }
  }, [number]);

  return (
    <>
      <Button onClick={() => dispatch({ type: "ADD_CIRCLE" })}>
        ADD CIRCLE
      </Button>
      <Button primary onClick={() => dispatch({ type: "SHUFFLE" })}>
        SHUFFLE
      </Button>
      <Button primary onClick={() => dispatch({ type: "STOP_ODD" })}>
        STOP ODD NUMBER
      </Button>
      <Button primary onClick={() => dispatch({ type: "START_ODD" })}>
        START ODD NUMBER
      </Button>
      <Container>
        {circles.length > 0 &&
          circles.map((circle, i) => <Circle key={i} {...circle } easter_eggs={ easter_eggs } />)}
      </Container>
    </>
  );
};

export default App;
