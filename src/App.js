import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

import Btn from './components/Btn/Btn';
import Btn2 from './components/Btn2/Btn2';
// import TestDiv from './components/TestDiv/TestDiv';
import Title from './components/Title/Title'

function App() {
    
    //всегда внутри компонента, без вложенности!!!
    // let newText = 'Ты нажал на первую кнопку, молодец'
    // let text = 'Ничего особенного, если кнопка не нажата'

    let content = function(){
        return (
            <div>
                <h5>text</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam magni rerum nemo omnis ab repudiandae beatae. Dolorum consequuntur aut ipsa eos harum nihil illum saepe ab! Molestiae minima adipisci inventore.</p>
            </div>
        )
    }

    let [text, newText] = useState(content) 
    let [textTitle, newText2] = useState('Заголовок') 

    let msg1 = function(text){
        console.log('some message');
        newText(text)
    }
    let msg2 = function(){
        console.log('222222');
    }
    // let msg3 = function(){
    //     console.log('3232323232323');
    // }
    let parMsg = function(name, age){
        console.log(`меня зовут ${name}, мне ${age} лет`);
    }

    let btnNahid = function(name){
        console.log(`текст для кнопки ${name}`)
    }

    let changeText = function(someNew){
        console.log(someNew);
        newText(someNew)
    }

    let primer = <div><h1>Слово</h1></div>;

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
        <Title text={textTitle}/>
        <Btn action={() => newText(111)} text='test1'/>
        <Btn action={()=> changeText(primer)} text='test2'/>
        <Btn action={() => {console.log('3232323232323')}} text='test3'/>
        <Btn action={()=>newText2('Пока')} text='test4'/>
        <Btn2 action={msg2}>textChildren</Btn2>
        <Btn text='кнопка для Нахида' action={()=>newText2('Прювет')}/>
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
