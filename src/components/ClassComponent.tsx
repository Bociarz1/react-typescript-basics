import React from "react";

interface ClassComponentProps {
  
}
 
interface ClassComponentState {
  
}
 
class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
  constructor(props: ClassComponentProps) {
    super(props);
    this.state = { value: 0 };
  }
  render() { 
    return ( 
      <>
      </>
     );
  }
}
 
export default ClassComponent;