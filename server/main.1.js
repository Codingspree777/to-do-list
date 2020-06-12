const testFunc = () => {
  const payloadOne = { pay: 'load' }
  const payloadTwo = { pay2: 'load2' }
 
  apiCallOne(payloadOne).then(()=> {
    //check a condition for true false to see if apiCallTwo is needed
    if(needToCallTwo) {
      apiCallTwo(payloadTwo).then(()=>
      alert('apiCallOne and apiCallTwo success')
      ).catch(()=>{
        alert('apiCallOne success, but apiCallTwo fail')
      })
    } else {
      alert("apiCallOne Success")
    }
  }).catch(()=>{
    alert("apiCallOne Fail")
  })
}