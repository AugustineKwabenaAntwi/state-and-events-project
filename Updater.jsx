import React from 'react';
class Updater extends React.Component {
 state = { backgrndcolor: 'success' }
 onChange = () => {
  if (this.state.backgrndcolor == 'success') {
   this.setState({ backgrndcolor: 'primary' })

  }
  else if (this.state.backgrndcolor == 'primary'){
   this.setState({ backgrndcolor: 'danger' })
  }  
  else if (this.state.backgrndcolor == 'danger'){
   this.setState({ backgrndcolor: 'warning' })
  }  
   else {
   this.setState({ backgrndcolor: 'success' });

  }
 }
 render() {
  return (
   <>
    <button 
     onClick={this.onChange} style={{color: 'black' }} className={`btn font-weight-bold btn-${this.state.backgrndcolor}`}>CHANGE BUTTON COLOR</button>
   </>
  )
 }
};

export default Updater;