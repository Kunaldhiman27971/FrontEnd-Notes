// import React from 'react'
// import { useState } from 'react'

// const App = () => {


//   const [num,setNum] = useState(10)

//   //num is only for reading the value and setNum is for updating the value of num and useState(0) is the initial value of num which is 0 in this case.

//   // useState:-hmari ek hook hai jo hume state manage karne me help karti hai. State ka matlab hota hai ki hum apne component ke andar kuch data ko store kar sakte hain aur usko update kar sakte hain. useState hook hume ek array return karta hai jisme pehla element hota hai current state value aur dusra element hota hai ek function jo hume state ko update karne me help karta hai.


// const increase=()=>{
//   setNum(num+1)
// }

// const decrease=()=>{
//   setNum(num-1)
// }

//   return (
//     <div className='w-screen h-screen bg-slate-300 flex flex-col justify-center items-center'>
//       <h1 className='font-black text-2xl flex justify-center'>{num}</h1>
//      <div className='m-2 gap-1.5 flex justify-center'> <button 
//       className='bg-emerald-400 text-white font-bold rounded-2xl px-2 py-2'
//       onClick={increase}>Increase it</button>
//       <button 
//       className='bg-emerald-400 text-white font-bold rounded-2xl px-2 py-2'
//       onClick={decrease}>Decrease it</button></div>
//     </div>
//   )
// }
// export default App




// import { useState } from 'react'
// import React from 'react'


// const App = () => {
//   const arr=["Kunal","Rohit","Satyarth","Shivam","Anshul"]
//   const [num, setNum] = useState(0)
//   return (
//     <div>
//       <h1>{arr[num]}</h1>
//       <button
//         onClick={()=>{
//           if(num<arr.length-1){
//             setNum(num+1)
//           }
//         }}>
//         Change User</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [marks, setMarks] = useState([60, 70, 80, 90, 50,28,12])

//   function graceMarks(){
//       const newMarks=marks.map(function(elem){
//         if(elem<33){
//           return elem+5
//         }
//         else{
//           return elem
//         }
//       })
//       setMarks(newMarks)
//   }

//   return (
//     <div className='w-screen h-screen bg-slate-300 flex flex-col justify-center items-center' >
//       {marks.map(function(elem,idx){
//         return <h1 key={idx} className='text-2xl font-bold'>Student {idx+1} ={elem}{(elem>=33 ? "(pass)":"(fail)")}</h1>
//       })}

//       <button
//       className='px-2 py-2 bg-emerald-600 text-white font-bold rounded-2xl mt-4 '
//       onClick={graceMarks}
//       >Give them Grace</button>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Men from './components/Men'
import Women from './components/Women'
import { useState } from 'react'

const App = () => {
  const [Section, setSection] = useState("Men's Section")
  function changeSection(){
    if(Section==="Men's Section"){
      setSection("Women's Section")
    }
    else{
      setSection("Men's Section")
    } 
    
  }
  return (
    <div className='flex flex-col gap-10 justify-center items-center w-screen h-screen bg-slate-300 '>
      {Section==="Men's Section" ? <Men/> : <Women/>}
      <button className='px-3 py-3 m-2 bg-emerald-800 text-xl font-bold rounded-2xl' onClick={changeSection}>Want to Swtich Section</button>
    </div>
  )
}

export default App
