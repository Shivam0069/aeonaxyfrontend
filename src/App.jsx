import React from 'react'
import Describe from './components/Describe'
import Comfort from './components/Comfort'
import Learning from './components/Learning'
import{Stepper, Step, StepLabel} from '@mui/material'
import { multicontext } from './components/Stepcontext'
import { useContext } from 'react'
import Onway from './components/Onway'
import Interested from './components/Interested'
import Rightplace from './components/Rightplace'
import MobileStepper from '@mui/material/MobileStepper';


const App = () => {
  const {step, setStep} = React.useContext(multicontext)
function showstep(step) {
  switch(step){
    case 1: return <Describe/>
    case 2: return <Interested/>
    case 3: return <Rightplace/>
    case 4: return <Comfort/>
    case 5: return <Onway/>
    case 6: return <Learning/>

  }
}

  return (
    <div className='w-full overflow-x-hidden scrollbar-hide' >
      {/* <Stepper className='ml-12 mt-10  mb-7 ' style={{width: '80%'}} activeStep={step-1} orientation='horizontal'>
<Step className='green'>
  <StepLabel className=''></StepLabel>
</Step>
<Step>
  <StepLabel></StepLabel>
</Step>
<Step>
  <StepLabel></StepLabel>
</Step>
<Step>
  <StepLabel></StepLabel>
</Step>
<Step>
  <StepLabel></StepLabel>
</Step>


      </Stepper> */}
      <div className='w-full'>
      <MobileStepper style={{width: '200%', height: '50px'}} variant="progress"
      steps={6}
      position="static"
      activeStep={step-1}
      sx={{ width: '100%', flexGrow: 1,color: 'green', borderColor: 'green', height: '10px' }}  />
      {showstep(step)}
    </div>
      {/* {showstep(step)} */}
    </div>
  )
}

export default App