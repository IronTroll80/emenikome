import Image from 'next/image'
import styles from './bio.module.css'

export default function Bio (){
    return(
        <>
        
        <div className= {styles.container}>
            <h3>About Me</h3>
            <div className= {styles.body}>
                <div className= {styles.left}>
                    <Image src='/me.jpg' alt='profile picture' fill/> 
                </div>
                <div className= {styles.right}>
                    <p> 
                    Hi, I'm <b>Kome</b>,  a full-stack product designer based in Lagos, Nigeria. <br/><br/>

                    I've been drawn to creating things for as long as I can  remember, starting with drawing my own comics as a kid and eventually  working my way up to designing and building high-fidelity UI screens.  For me, design has always been 
                    less about aesthetics and more about  meaning, I care deeply about work that actually helps people or solves a real problem. <br/><br/>

                    I wrote my first line of HTML in 2021 and haven't stopped  learning since. Alongside my design practice, 
                    I'm studying Mass  Communication, Public Relations, and Advertising at university, which  has given me a sharper lens for 
                    thinking about how products communicate  and connect with people. <br/><br/>

                    Outside of work, I'm a devoted football fan. Weekends belong to the match. <br/><br/>

                    If you're building something meaningful and want a collaborator who thinks in both design and code, I'd love to hear from you</p>
                </div>
            </div>
        </div>
        
        </>
    )
}