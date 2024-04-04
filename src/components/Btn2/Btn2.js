export default function Btn2({children, action}) {
    // let msg = function(){
    //     console.log('some message');
    // }
  
    return (
    <button onMouseOut={()=>{console.log('another message');}}>
        {children}
    </button>
  );
}
