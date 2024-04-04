// import './Btn.css';

export default function Btn({text, action}) {
    // let btnNahid = function(){
    //     console.log('текст для кнопки Нахида')
    // }

    let handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
        }
      }

  return (
    <button onKeyDown={handleKeyPress} onClick={action}>{text}</button>
  );
}
