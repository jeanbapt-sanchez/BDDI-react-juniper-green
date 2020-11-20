import { Fragment }  from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory();

  const handlePlay = (e) => {
    history.push("/game")
  }

  const handleRules = (e) => {
    history.push("/game/rules")
  }

  return (
    <Fragment>
      <h1>Welcome to the Juniper Green game</h1>
      <button onClick={(e) => handlePlay()}>Play</button>
      <button onClick={(e) => handleRules()}>Rules</button>
    </Fragment>
  );
}

export default Home;
