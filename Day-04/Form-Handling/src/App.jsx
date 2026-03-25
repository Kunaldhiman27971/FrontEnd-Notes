// import React from 'react'
// import Navbar from './components/Navbar'

// const App = () => {
//   return (
//     <div className='h-screen bg-linear-to-br from-emerald-100 to-emerald-200'>
//       <Navbar title="sheriyans" links={["Home","About", "Courses", "Contact"]} />
//        <Navbar title="sheriyans" links={["Home","About", "Courses", "Contact"]} />
//         <Navbar title="sheriyans" links={["Home","About", "Courses", "Contact"]} />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Men from './components/Men'
// import Women from './components/Women'

// const App = () => {

//   const user1={
//     name:"Kunal",
//     age: 22,
//     gender:"male"
//   }
//   const user2={
//     name:"Shivani",
//     age: 22,
//     gender:"female"
//   }

//   const user3={
//     name:"Rohit",
//     age:8,
//     gender:"male"
//   }

//   return (
//     <div>
//       {user1.gender==="male"? user1.age>10 ? <Men /> : <Women /> : <Women />}  
//        {/* Conditional Rendering :it is used to render different components or elements based on a condition. In this case, we are checking the gender property of user1. If it is "male", we render the Men component; otherwise, we render the Women component. */}
       
//     </div>
//   )
// }

// export default App

import React from 'react'
import Button from './components/Button'

const App = () => {
  
  return (
    <div>
      <Button />
    </div>
  )
}
export default App


