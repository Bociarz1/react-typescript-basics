import AdvancedProps from "./components/AdvancedProps";
import ClassComponent from "./components/ClassComponent";
import EventProps from "./components/EventProps";
import StyleProps from "./components/StyleProps";
import TipsForTyping from "./components/TipsForTyping";
import TypingProps from "./components/TypingProps";

// props for TypingProps
const value1 = 10
const value2 = 'number'

// props for TipsForTyping
const value = 0
const id = 1

function App() {
  return (
    <>
      <TypingProps value1={value1} value2={value2}/>
      <AdvancedProps><>There is some JSX</> </AdvancedProps>
      <EventProps/>
      <StyleProps/>
      <TipsForTyping value={value} id={id}/>
      <ClassComponent/>
    </>
  );
}

export default App;
