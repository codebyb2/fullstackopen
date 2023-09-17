import { useState } from 'react';

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Stats = ({ label, value }) => (
  <tbody>
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  </tbody>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = all / 3;
  const pos = good / all * 100 || 0;

  if (all === 0) {
    return (
      <div>
        <Title title='statistics' />
        <p>no feedback given</p>
      </div>
    );
  } else {
    return (
      <>
        <Title title='statistics' />
        <table>
          <Stats label='good' value={good} />
          <Stats label='neutral' value={neutral} />
          <Stats label='bad' value={bad} />
          <Stats label='all' value={all} />
          <Stats label='average' value={avg} />
          <Stats label='positive' value={pos + '%'} />
        </table>
      </>
    );
  }   
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Title title='give feedback' />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );    
};

export default App;
