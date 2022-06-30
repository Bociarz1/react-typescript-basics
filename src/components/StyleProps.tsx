// 1. typing for STYLES
type StylePropsType = React.CSSProperties

const styles = {
  backgroundColor: 'black',
  margin: '10px'
}
function StyleProps(styles: StylePropsType) {
  return ( 
    <div style={styles}>

    </div>
   );
}

export default StyleProps;