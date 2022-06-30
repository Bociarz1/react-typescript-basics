import { Children } from "react";

// 1. you can use OPTIONAL PARAMETER "?" it means that some value couldn't invoked
type Type = {
  value1?: number 
}
// 2. if component consist JSX as a children 
type Type1 = {
  children: React.ReactNode
} 
function AdvancedProps(props: Type1) {
  return ( 
    <>
      {props.children}
    </>
   );
}

export default AdvancedProps;