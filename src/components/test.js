import {React, useState} from 'react'

const Test = () => {


  const [mcqs, setMcqs] = useState('')
  const [opt1, setOpt1] = useState('')
  const [opt2, setOpt2] = useState('')
  const [opt3, setOpt3] = useState('')
  const [opt4, setOpt4] = useState('')

  const handleChange = (e) => {
    if ( e.target.name === 'mcqs') {
      setMcqs(e.target.value)
    }
    else if ( e.target.name === 'opt1') {
      setOpt1(e.target.value)
    }
    else if ( e.target.name === 'opt2') {
      setOpt2(e.target.value)
    }
    else if ( e.target.name === 'opt3') {
      setOpt3(e.target.value)
    }
    else if ( e.target.name === 'opt4') {
      setOpt4(e.target.value)
    }   
    
  }

  const submit = async (e) => {
    e.preventDefault()

    
    // fetch the data from form to makes a file in local system

    const data = { mcqs, opt1, opt2, opt3, opt4 };
      let res = await fetch(`https://mcqs-3c572-default-rtdb.firebaseio.com/mcqs.json`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
      console.log(response)
        setMcqs('')
        setOpt1('')
        setOpt2('')
        setOpt3('')
        setOpt4('')

  }




  return (
    <>
     <div className='container w-75'>

<form method='POST' onSubmit={submit}>


  <div className="form-floating mt-5">
    <textarea name='mcqs' onChange={handleChange} value={mcqs}  className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
    <label htmlFor="floatingTextarea2">MCQS</label>
  </div> 

  <div className="row mt-4">
    <div className="col">
      <input name='opt1' onChange={handleChange} value={opt1} type="text" className="form-control" placeholder="First option" aria-label="First option"/>
    </div>
    <div className="col">
      <input name='opt2' onChange={handleChange} value={opt2} type="text" className="form-control" placeholder="Second option" aria-label="Second option"/>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col">
      <input name='opt3' onChange={handleChange} value={opt3} type="text" className="form-control" placeholder="Third option" aria-label="Third option"/>
    </div>
    <div className="col">
      <input name='opt4' onChange={handleChange} value={opt4} type="text" className="form-control" placeholder="Forth option" aria-label="Forth option"/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Submit</button>

</form>


</div>
    </>

  )
}

export default Test