// import './Btn.css';

export default function Btn({text, action}) {
    

  return (
    <button onClick={action}>{text}</button>
  );
}
