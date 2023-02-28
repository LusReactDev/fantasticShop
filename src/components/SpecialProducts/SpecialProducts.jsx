import './SpecialProducts.css'
import React from 'react'
import IMG from '../../img'
import {motion} from 'framer-motion'

function SpecialProducts() {
  return (
    <div className='SpecialProducts'>
      <h2>SPECIAL PRODUCTS</h2>
      <span></span>
      <p>Structured chic panels power party flattering ultimate trim back pencil silhouette perfect look.</p>
      <div className='pics'>

        <div className='first'>
            <motion.div
             viewport={{
               once:true,
               amount:0.5
            }}
        initial = {{
            opacity:0,
            x:-100,
        }}
        whileInView ={{
            opacity:1,
            x:0,
            transition:{
                type:'spring',
                bounce:0.4,
                duration:1.5,
                delay:0
            }
        }}
         className='up'><img src={IMG.first1} /></motion.div>
            <div className='down'>

            <motion.div
          viewport={{
            once:true,
            amount:0.5
         }}
          initial = {{
         opacity:0,
         x:-100,
         }}
          whileInView ={{
         opacity:1,
         x:0,
         transition:{
             type:'spring',
             bounce:0.4,
             duration:1.8,
             delay:0.5
         }
         }}
            ><img src={IMG.first2} /></motion.div>
            <motion.div
            viewport={{
              once:true,
              amount:0.5
           }}
       initial = {{
           opacity:0,
           x:-100,
       }}
       whileInView ={{
           opacity:1,
           x:0,
           transition:{
               type:'spring',
               bounce:0.4,
               duration:1.5,
               delay:0.3
           }
       }}
            ><img src={IMG.first3} /></motion.div>
            </div>
           
        </div>

        <motion.div 
         viewport={{
          once:true,
          amount:0.5
      }}
      initial = {{
          opacity:0,
          scale:0.8,
      }}
      whileInView ={{
          opacity:1,
          scale:1,
          transition:{
              type:'spring',
              bounce:0.4,
              duration:1.5,
              delay:0
          }
      }}
        className='second'>
        <div><img src={IMG.second} /></div>

        </motion.div>

        <div className='third'>
        <motion.div
       viewport={{
        once:true,
        amount:0.5
     }}
      initial = {{
     opacity:0,
     x:100,
     }}
      whileInView ={{
     opacity:1,
     x:0,
     transition:{
         type:'spring',
         bounce:0.4,
         duration:1.5,
         delay:0
     }
     }}
      ><img src={IMG.third1} /></motion.div>
        <motion.div
       viewport={{
        once:true,
        amount:0.5
     }}
      initial = {{
     opacity:0,
     x:100,
     }}
      whileInView ={{
     opacity:1,
     x:0,
     transition:{
         type:'spring',
         bounce:0.4,
         duration:1.8,
         delay:0.5
     }
     }}
      ><img src={IMG.third2} /></motion.div>
        
        </div>

      </div>


    </div>
  )
}

export default SpecialProducts