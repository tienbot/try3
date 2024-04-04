import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

import Btn from './components/Btn/Btn';
import Btn2 from './components/Btn2/Btn2';
// import TestDiv from './components/TestDiv/TestDiv';

function App() {
    let [text, newText] = useState('Ничего особенного, если кнопка не нажата') //всегда внутри компонента, без вложенности!!!
    // let newText = 'Ты нажал на первую кнопку, молодец'
    // let text = 'Ничего особенного, если кнопка не нажата'
    let msg1 = function(text){
        console.log('some message');
        newText(text)
    }
    let msg2 = function(){
        console.log('222222');
    }
    let msg3 = function(){
        console.log('3232323232323');
    }
    let parMsg = function(name, age){
        console.log(`меня зовут ${name}, мне ${age} лет`);
    }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!?.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Btn action={() => msg1(111)} text='test1'/>
        <Btn action={msg2} text='test2'/>
        <Btn action={msg3} text='test3'/>
        <Btn action={() => parMsg('Миша', 40)} text='test4'/>
        <Btn2 action={msg2}>textChildren</Btn2>
        {/* <TestDiv>
            <h1>тест</h1>
            <h2><i>тест</i></h2>
            <h3><span>test3</span></h3>
        </TestDiv> */}
        <br></br>
        <br></br>
        <br></br>
        <div>{text}</div>
    </div>
  );
}

export default App;
