import React from 'react';
import './Kid.css';


export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false , isQualified : false , available : false , isHappy : false } ;

   this.qualified =  this.qualified.bind(this)

 }

 componentDidMount(){

    setTimeout(
        ()=>{
            this.setState({
                danceSteps : ['step1' , 'step2' ]
            })
        }
        ,
        2000
    )

     
 }
 static getDerivedStateFromProps(props,state){
    const {isQualified} = state;
    const oldSteps =  state.danceSteps ;
    const newSteps =  props.furtherSteps ;

   const allSteps = [...oldSteps,...newSteps]

   return { danceSteps : state.danceSteps.length < 5 ?  allSteps : state.danceSteps ,
             startedPerforming : !isQualified ? props.startedPerforming : false  ,
             emotion : props.emotion || 'nervous' ,
             isHappy : props.emotion ? true : false 
            
          }
}

componentDidUpdate(prevProps){
   // console.log('componentDidUpdate',prevProps.isQualified)
   if(prevProps.isQualified !== this.props.isQualified){
       this.qualified()
   }

}

componentWillUnmount(){
    this.props.leaveJudgesAndTeacher()
}
 qualified() {
   this.setState({startedPerforming: false ,
                  isQualified : true    
                })
 }

 render() {
   const {dressColor} = this.props;
   const {danceSteps, emotion, startedPerforming, currentStepIndex , isHappy} = this.state;

    // console.log('danceSteps',danceSteps)
    // console.log('props kid======>',this.props)

   return (
   <div>
     <div>dressColor: { dressColor }</div>
      <div style={{backgroundColor: dressColor, width: 80, height: 150 , margin: 'auto'}}></div>
    <div>Emotion: { emotion } 
    {       !isHappy ?
        <i class="far fa-grimace"  style={{fontSize:20 , padding:5}} ></i>
        :
        <i class="far fa-smile" style={{fontSize:20 , padding:5}}></i>
    }
    </div>
    {startedPerforming &&
    <div>
      <div>Current Step: {danceSteps[currentStepIndex]}</div>
     

      <button className="btn btn-primary" onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
      <br/> <br/>
    </div>}
</div>
   );
 }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
