import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Kid from './screens/Kid/Kid'
import Teacher from './screens/Teacher/Teacher'
import Judge from './screens/Judge/Judge'

class App extends Component {

  constructor(props){
    super()
    this.state ={
      isQualified : false , isKidLeave : false , isJudgeLeave : false , isTeacherLeave : false 
      
    }
    this.updateSteps = this.updateSteps.bind(this)
    this.updateEmotion = this.updateEmotion.bind(this)
    this.getStar = this.getStar.bind(this)
    this.leaveJudgesAndTeacher = this.leaveJudgesAndTeacher.bind(this)
  }

  static getDerivedStateFromProps(){
   
    return {
      volume : 5 ,

    }
  }

updateSteps(furtherSteps){
    // console.log('furtherSteps',furtherSteps)
    this.setState({
      furtherSteps ,
      startedPerforming :true
    })
}

updateEmotion(updateemotion){
  // console.log('updateemotion',updateemotion)
   this.setState({
     emotion : updateemotion
   })
}

getStar(checkStar){
  // console.log('checkStar',checkStar)
  this.setState({
    isQualified :  checkStar
  })

}

leaveJudgesAndTeacher(){
  this.setState({
        isJudgeLeave : true ,  isTeacherLeave : true
  })
}

  render() {
    const {volume , furtherSteps , startedPerforming , emotion , isQualified , isKidLeave , isJudgeLeave ,isTeacherLeave} = this.state;
    // console.log('volume ===>',volume)
    // console.log('props from teacher ====>',this.props)
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="App">
             {
               !isKidLeave &&
               < Kid dressColor='lightgreen' furtherSteps={furtherSteps} startedPerforming={startedPerforming}  emotion={emotion} isQualified={isQualified} 
               leaveJudgesAndTeacher ={this.leaveJudgesAndTeacher}
               />
             }
                   {
                isQualified && !isKidLeave && <input type='button' value='Leave The Show' onClick= {() => this.setState({ isKidLeave: true })} />
                   }
                   {
                      !isTeacherLeave &&
            < Teacher updateSteps={this.updateSteps} />
                   }
                   {
                     !isJudgeLeave &&
            < Judge updateEmotion={this.updateEmotion} getStar={this.getStar} />
                   }

      </div>
    );
  }
}

export default App;
