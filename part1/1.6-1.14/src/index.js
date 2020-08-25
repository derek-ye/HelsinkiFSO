import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  // const [name] = props;
  return (
    <button onClick={props.onclick}>{props.name}</button>
  )
}

const Stats = ({good, neutral, bad}) => { // destructuring props into {...}
  console.log(good)
  if (good + neutral + bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>good {good}</td>
          </tr>
          <tr>
            <td>neutral {neutral}</td>
          </tr>
          <tr>
            <td>bad {bad}</td>
          </tr>   
          <tr>
            <td>all {good + neutral + bad}</td>
          </tr>  
          <tr>
            <td>average {(good - bad)/(good + neutral + bad)}</td>
          </tr>  
          <tr>
            <td>positive {good/(good + neutral + bad)}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increase = (ratingType) => {
    if (ratingType === "good") {
      return () => setGood(good + 1)
    }
    else if (ratingType === "neutral") {
      return () => setNeutral(neutral + 1)
    }
    else if (ratingType === "bad") {
      return () => setBad(bad + 1)
    }
    else {
      // fail
      return () => console.log('fail')
    }
  }

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button name="good" onclick={increase("good")}/>
      <Button name="neutral" onclick={increase("neutral")}/>
      <Button name="bad" onclick={increase("bad")}/>
      <h1>
        statistics
      </h1>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

