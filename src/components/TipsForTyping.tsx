// 1. you can craete file named 'ComponentName.types.ts' and inside specified your types, then import 
import { TipsForTypingProps } from "./TipsForTyping.types";

// 2. Use destructuristaion of props
function TipsForTyping({value, id}:TipsForTypingProps) {
  return ( 
    <>
      {`id-${id} value-${value}`}
    </>
   );
}

export default TipsForTyping;