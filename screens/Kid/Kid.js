import React from 'react';


export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false , isQualified : false , available : false } ;

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
   const {danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;

    // console.log('danceSteps',danceSteps)
    // console.log('props kid======>',this.props)

   return (
   <div>
     <div>dressColor: { dressColor }</div>
      <div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>
    <div>Emotion: { emotion }</div>
    {startedPerforming &&
    <div>
      <div>Current Step: {danceSteps[currentStepIndex]}</div>
      <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
    </div>}
</div>
   );
 }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
