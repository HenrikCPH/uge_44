import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import App from './ListDemo';

export function Show() {
  return(
    <div>
      <Count number={5} />
      <GetChuckJoke />
      <App />
    </div>
  )
}

 function Count (props)  { 
   const [count, setCount] = useState(props.number);

   useEffect(() => {
    document.title = `You clicked ${count} times`;
    localStorage.setItem("count", count);
  });

   return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + props.number)}>
           Click me
         </button>
         <button value ="count" onClick={() => setCount(count - props.number)}>
           Reverse click
         </button>
       </div>

     );
 }
 
 function GetChuckJoke(){

  let urlChuck =  'https://api.chucknorris.io/jokes/random'; 
  let urlDad = 'https://icanhazdadjoke.com/';
 
  const [fetchedJoke, setFetchedJoke] = useState([]);
  const[dadJoke, setDadJoke] = useState([]);
 
 
  const jokeHandler = () => {
      fetch(urlChuck)
      .then(res => res.json())
      .then(data => {
      setFetchedJoke(data);
      });
  };

 
  useEffect(() => {
   const interval = setInterval(() => {
     setDadJoke(
       fetch(urlDad, {
         headers: new Headers({
           accept: "application/json"
         })
       })
         .then(res => res.json())
         .then(data => {
           setDadJoke(data);
         })
     );
   }, 10000);
   return () => clearInterval(interval);
 }, []);
 
 
  return (
    <div>
    <button onClick={jokeHandler}>ChuckJoke</button>
    <p>{fetchedJoke.value}</p>
    <h3>Here Comes the Dad Jokes every 10'th second</h3>
    <p>{dadJoke.joke}</p>

    </div>
  );
 
 }

 export default Show;

