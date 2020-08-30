import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
let votes = Array(anecdotes.length).fill(0);
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [largest, setLargest] = useState(0);
  const [currVotes, setCurrVotes] = useState(0);
  const [maxVotes, setMaxVotes] = useState(0);
  
  const increaseVotes = () => {
    let highScoreIndex = votes.indexOf(Math.max(...votes));
    setLargest(highScoreIndex);

    let copy = [...votes];
    copy[selected] += 1;
    votes = copy;

    console.log(votes[selected])
    console.log(votes[highScoreIndex])
    setCurrVotes(votes[selected]);
    setMaxVotes(votes[highScoreIndex]);
  }

  const getRandomQuote = () => {
    var newQuote = Math.floor(Math.random() * (props.anecdotes.length));
    while (newQuote === selected) {
      newQuote = Math.floor(Math.random() * (props.anecdotes.length));
    }
    setSelected(newQuote);
    setCurrVotes(votes[newQuote]);
    console.log(newQuote);
  }
  
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {currVotes} votes</p>
      
      <Button action={increaseVotes} text="vote"/>
      <Button action={getRandomQuote} text="next anecdote"/>
      <h1>Anecdote with the most votes</h1>
      <p>{props.anecdotes[largest]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.action}>{props.text}</button>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
