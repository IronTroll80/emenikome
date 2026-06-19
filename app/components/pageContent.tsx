'use client'

import Image from 'next/image'
import styles from './pageContent.module.css'
import { motion } from "framer-motion";

interface Process{
    type: string
    content: string
}

interface Props {
    introText : string
    subtitle: string
    page: string
    desc: string
    duration: string
    brandAbout: string
    skills: string[]
    roles: string[]
    tools: string[]
    brandBrief: string,
    process: Process[]
    knowledge: string;
    gallery: string[]
    heroBg: string
    overlayColor: string
}

export default function PageContent ({
    introText,
    subtitle,
    page,
    desc,
    duration,
    brandAbout,
    skills,
    roles,
    tools,
    brandBrief,
    process,
    knowledge,
    gallery,
    heroBg,
    overlayColor,
}: Props){


    return(
        
        <>
        
        <div className= {styles.container}>
            <h3 className= {styles.introText}><i>{introText}</i></h3>
            <p className= {styles.subtitle}>{subtitle}</p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ duration: 0.55 }} 
                className= {styles.hero} 
                style={{backgroundImage: `url(${heroBg})`}}>
                <div className= {styles.overlay} style={{backgroundColor: `${overlayColor}`}}>
                    <h4 className= {styles.projectTitle}>{page}</h4>
                    <p className= {styles.projectDescription}>{desc}</p>
                </div>
            </motion.div>

{/* 
            <div className= {styles.imageContainer}>
                <Image src = {src} alt= {`${page}` + `logo`} fill />
            </div> */}

            <div className= {styles.skills}>
                {
                    skills.map((skill, index)=>(
                        <div className= {styles.skill} key={index}>
                            {skill}
                        </div>
                    ))
                }
            </div>

            <motion.div className= {styles.heroInfo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 0.55 }}>

                <div className= {styles.heroSection}>
                        <h4>My Roles</h4>
                        {
                            roles.map ((role, index)=>(
                            <div className= {styles.heroSectionList} key={index}>
                                {role}
                            </div>
                            ))
                        }
                </div>

                <div className= {styles.heroSection}>
                        <h4>Tools Used</h4>
                        {
                            tools.map ((tool, index)=>(
                            <div className= {styles.heroSectionList} key={index}>
                                {tool}
                            </div>
                            ))
                        }
                </div>

                <div className= {styles.heroSection}>
                        <h4>Duration</h4>
                        <p>{duration}</p>
                </div>   

            </motion.div>     
        <motion.div 
            className= {styles.brand} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.55 }}>
            <h4 className= {styles.brandHeader}>The Brand</h4>
            <p>{brandAbout}</p>
        </motion.div>

        <motion.div className= {styles.brief}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.55 }}>
            <h4 className= {styles.brandHeader}>The Brief</h4>
            <p>{brandBrief}</p>
        </motion.div>

        <motion.div className= {styles.process}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.55 }}>
            <h4 className= {styles.brandHeader}>The Process</h4>
            {process.map((step, index)=>(
                step.type === 'text' ? 
                <p className= {styles.processText} key={index}>
                    {step.content}
                </p>

                :

                <Image src={step.content} alt='step' key={index} width={500} height={280}/>

            ))}
        </motion.div>

        <motion.div className = {styles.knowledge} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.55 }}>
            <h4 className= {styles.brandHeader}>The Takeaway</h4>
            <p>{knowledge}</p>
        </motion.div>

        <motion.div className= {styles.gallery} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.55 }}>

            <h4 className= {styles.brandHeader}>Gallery</h4>
            <div className= {styles.galleria}>
            {gallery.map((image, index)=>(
                <Image key={index} src={image} alt='gallery_img' width={300} height={300}/>
            ))}
            </div>
        </motion.div>



        </div>
        
        </>
    )
}