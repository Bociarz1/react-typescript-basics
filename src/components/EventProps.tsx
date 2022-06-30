// 1. typing for EVENTS like button onClick and imput onChange
type EventType = React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>


function EventProps() {

  function handleFunc(e:EventType) {
    if(e.type === "click") {
      return console.log("onClick")
    }
    console.log("onChange")
  }
  return ( 
    <>
      <button type="button" onClick={handleFunc}>Button</button>
      <input type="input" onChange={handleFunc}/>
    </>
   );
}

export default EventProps;