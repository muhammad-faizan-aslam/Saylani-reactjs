import React from 'react'

export default class Judge extends React.Component {
  constructor(props) {
   super(props)
 
   this.state = {stars: 0, available: false}
  }
 
  applaud() {
    this.props.updateEmotion('happy')
  }
 
  provideStars() {
    const {stars} = this.state;
 
    this.setState({stars: stars + 1})
    if(stars>=5){
      this.props.getStar(true)
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    // const {stars} = this.state;
    if(nextState.stars > 5){
     return false
    }
    return true
  }
 
  render() {
    const {stars, available} = this.state;
 
    return (
      <div>
        
        <br/>
        <button className='btn btn-primary' type="button" onClick={this.applaud.bind(this)}>
         Appreciate performance
        </button>
        <br/> <br/>
        <button  className='btn btn-primary' type="button" onClick={this.provideStars.bind(this)}>
         Provide stars
        </button>
      <br/>
        Kid is available: {available}
        <br/>
        <span>
        
        <i class="fas fa-star"></i> Stars gained: {stars}

        </span>
      </div>
    );
  }
 }
 