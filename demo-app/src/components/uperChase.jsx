import React, { useState } from 'react'

export default function UperChase() {
  const [Data,setData]=useState()
  function HandleChange(event) {
   const a =event.target
   setData(a)
   console.log(Data)
}

 function HandleSubmit(){
    alert(Data)

 }
    return (
        <>
        <label htmlFor="">Enter words</label>
        <textarea value={Data} onChange={HandleChange} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={HandleSubmit}>convet to upercase</button>
        </>
    
  )
}
