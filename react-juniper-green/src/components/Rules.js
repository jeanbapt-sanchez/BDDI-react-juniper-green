import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

const Rules = () => {
  const history = useHistory();

  return (
    <Fragment>
      <h1>Rules of Juniper Green game</h1>
      <button onClick={() => history.push("/")}>Back to the home page</button>
      <h2>The game has three rules :</h2>
      <ol>
        <li>
          Player 1 choose a number between 1 and 100.
          In turn, each player choose a number from
          multiples or divisors of the previously chosen number
          by his opponents and less than 100.
        </li>
        <li>
          A number is not played more than once.
        </li>
        <li>
          Looser are player who do not find multiples or common divisors
          at the previously chosen number.
        </li>
      </ol>
    </Fragment>
  );
}

export default Rules;
