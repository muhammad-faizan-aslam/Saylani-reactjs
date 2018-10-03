import React from 'react';


export default class Teacher extends React.Component {

  constructor(props){
    super()
    this.state = {
      isHelp : true
    }

    this.sendDataToKid = this.sendDataToKid.bind(this)

  }


 sendDataToKid() {
  const { isHelp } = this.state;
	const furtherSteps = ['step3', 'step4', 'step5']
  //Send this data to Kid.js
  this.props.updateSteps(furtherSteps)
  this.setState({
    isHelp : !isHelp
  })
 }


 render() {
   const { isHelp } = this.state;
   // console.log('props App.js ====>',this.props)
   return (

<div>
  {
    isHelp &&
<button className='btn btn-warning' onClick={this.sendDataToKid}>Get Help From Teacher</button>

  }
</div>

    
   );
 }
}
