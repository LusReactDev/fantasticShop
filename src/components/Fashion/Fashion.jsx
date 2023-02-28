import React from 'react'
import IMG from '../../img'
import './Fashion.css'
import {motion} from 'framer-motion'

function Fashion () {
  return (
    <div className='Fashion'>
        <h2><bold>Fashion </bold>Is Not Necessarily About Labels. It's Not <bold>About Brands.</bold> " It's About Something Else That Comes From Within You."<br />
<bold>Ralph Lauren</bold></h2>

       <div className="items"> 

        <motion.div 
        viewport={{
            once:true,
            amount:0.5
        }}
        initial = {{
            opacity:0,
            y:100,
        }}
        whileInView ={{
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                bounce:0.4,
                duration:1.7,
                delay:0
            }
        }}
        className="item">
            <h4>Standard-fit sleeveless midi dress</h4>
            <p>You have to stay true to your heritage; that's what your brand is about.</p>
            <img src = {IMG.one} alt = ''/>
        </motion.div>


        <motion.div
        viewport={{
            once:true,
            amount:0.5
        }}
        initial = {{
            opacity:0,
            y:-100,
        }}
        whileInView ={{
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                bounce:0.4,
                duration:1.7,
                delay:0.2
            }
        }}
         className="item">
        <img src = {IMG.two} alt = ''/>
            <h4>Casual Indigo Blue Jeans Jacket</h4>
            <p> Tops shift shape rich fabric relaxed fitting size true black gold zip virgin wool.</p>
            
        </motion.div>


        <motion.div
        viewport={{
            once:true,
            amount:0.5
        }}
        initial = {{
            opacity:0,
            y:100,
        }}
        whileInView ={{
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                bounce:0.4,
                duration:1.7,
                delay:0.4
            }
        }}
         className="item">
            <h4>Montes Loremous A Cosmopolite</h4>
            <p>Statement sophistication jersey tweed midi flattering comfortable details yellow.</p>
            <img src = {IMG.three} alt = ''/>
        </motion.div>


        <motion.div
        viewport={{
            once:true,
            amount:0.5
        }}
        initial = {{
            opacity:0,
            y:-100,
        }}
        whileInView ={{
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                bounce:0.4,
                duration:1.7,
                delay:0.6
            }
        }}
         className="item">
        <img src = {IMG.four} alt = ''/>
            <h4>Women’s long sleeve red Jacket</h4>
            <p> Best seller signature waist cut pockets cotton-mix red tailoring elegant cashmere.</p>           
        </motion.div>


       </div>

    </div>
  )
}

export default Fashion