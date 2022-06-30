  // 1. ts types: string | number | boolean | array[]-->(number[], string[], boolean[],{object}[]) | {objects} | BigInt |

  // 2. You can type  values with TYPE or INTERFACE
  // a) type --> using in APPS
  type Type1 = {
    value1: BigInt | string | Array<string>
    array: {value2:string}[]
  }
  // b) interface --> using in LIBRARY
  interface Type2 {
    value1: number
    value2: string
  }
  
  // 3. now props has assigned types
function TypingProps({value1, value2}: Type2) {
  return ( 
    <>
    </>
   );
}

export default TypingProps;