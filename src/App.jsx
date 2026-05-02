// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import './style.css'
import UseCard from './UseCard'
import ProductCard from './ProductCard'
import BasicComponent from './BasicComponent'
// import SkillList from './SkillList'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import MyButton from './MyButton'
// import StudentList from './StudentList'
// import StatusBadge from './StatusBadge'
import CardComponent from './CardComponent'
import Counter from './Counter'




function App() {
      const products=[
        {title:"samsung galaxy",price:80000},
         {title:"iPhone",price:120000},
          {title:"OnePlus",price:50000}
    ];


  return (
    <>
    
     {/* <Counter/> */}
     <h1>muskan</h1>
    <UseCard name="Muskan" city="Noida"/>
    <div className='productCard'>
      {products.map((item)=>(
    <ProductCard  title={item.title} price={item.price}/> 
  ))}
    </div> 
  <BasicComponent/>
  <BasicComponent/>
  <BasicComponent/>
  <Counter/>

  {/* <div>
     {skills.map((item)=>(
      <SkillList skills={item}/>
     ))}
  </div>  */}
   
  
    <Header name={"Muskan Maurya"} />
    <About/>
    <Footer email={"muskanmaurya553@gmail.com"}/>
{/* <div>
  {Button.map((item)=>(
    <MyButton  text={item.text} color={item.color}/>
  ))}
    </div> */}
      {/* <div>
        {students.map((item)=>(
          <StudentList name={item.name} marks={item.marks}/>
        ))}
      </div> */}
      {/* <StatusBadge isOnline={"offline"}/>  */}
       <div>
      <CardComponent name={"Muskan Maurya"} role={"Software Developer"} skills={["React "," Node"]} isAvailable={true}/>
      </div>
     {/* <Section title={"muskan maurya"} content={"she is skilled web developer with the knowledge of frontend technologies and deep logic understandings"}/> */}
    

    </>
  )
}

export default App
