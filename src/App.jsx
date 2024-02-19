import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';




function App() {
  const [pamount, setPamount] = useState(0)
  const [rate, setRate] = useState(0)
  const [time, setTime] = useState(0)
  const [result,setResult]=useState(0)


  const [validpamount, setValidpamount] = useState(false)
  const [validrate, setValidrate] = useState(false)
  const [validtime, setValidtime] = useState(false)

  const validInput = (e) => {
    const { name, value } = e.target
    // console.log(name,value)
    if (value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name == 'pamount') {
        setPamount(value)
        setValidpamount(true)
      }
      else if (name == 'rate') {
        setRate(value)
        setValidrate(true)
      }
      else {
        setTime(value)
        setValidtime(true)
      }
    }
    else {
      if (name == 'pamount') {
        setPamount(0)
        setValidpamount(false)
      }
      else if (name == 'rate') {
        setRate(0)
        setValidrate(false)
      }
      else {
        setTime(0)
        setValidtime(false)
      }
    }

  }
  // console.log(pamount, rate, time)
  // console.log(validpamount, validrate, validtime)

  const resetForm=()=>{
    setPamount(0)
    setRate(0)
    setTime(0)

    setValidpamount(false)
    setValidrate(false)
    setValidtime(false)
    setResult(0)
  }


  const submitted = (e) => {
    e.preventDefault()
    console.log(pamount, rate, time)
    const res=(pamount*rate*time)/100
    console.log(res)
    setResult(res)

  }

  return (
    <>
      <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='bg-light w-50 shadow rounded p-5'>
          <h4>Simple Interest Calculator</h4>
          <div className='d-flex justify-content-center p-5 border shadow mt-3' style={{ backgroundColor: 'yellow' }}>
            ₹ {result}
          </div>
          <form onSubmit={(e) => { submitted(e) }}>
            <div className='mt-2'>
              <TextField id="outlined-basic" name='pamount' value={pamount} onChange={(e) => { validInput(e) }} style={{ width: '100%' }} label="₹ Principle Amount" variant="outlined" />
              {
              !validpamount &&
              <div className='text-danger'>
                  Invalid Principle Amount              
              </div>
              }
            </div>
            <div className='mt-2'>
              <TextField id="outlined-basic" value={rate} name='rate' onChange={(e) => { validInput(e) }} style={{ width: '100%' }} label="% Rate" variant="outlined" />
              {
              !validrate &&
              <div className='text-danger'>
                  Invalid Principle Amount              
              </div>
              }
            </div>
            <div className='my-2'>
              <TextField id="outlined-basic" value={time} name='time' onChange={(e) => { validInput(e) }} style={{ width: '100%' }} label="Time" variant="outlined" />
              {
              !validtime &&
              <div className='text-danger'>
                  Invalid Principle Amount              
              </div>
              }
            </div>
            <Stack spacing={2} direction={'row'}>
              <Button variant="contained" disabled={validpamount&&validrate&&validtime?false:true} type='submit' className='bg-dark' style={{ height: '50px', width: '50%' }}>SUBMIT</Button>
              <Button variant="contained" className='bg-info' onClick={resetForm} style={{ height: '50px', width: '50%' }}>RESET</Button>
            </Stack>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
