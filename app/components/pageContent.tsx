import Image from 'next/image'
import styles from './pageContent.module.css'

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
    process: object[]
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


    const testProcess = [
        
        {
            type: 'text',
            content: 'Lorem Ipsum dolor sit amet consecteur'
        },
        {
            type: 'image',
            content: '/example.jpg'
        }
    ]

    return(
        
        <>
        
        <div className= {styles.container}>
            <h3 className= {styles.introText}><i>{introText}</i></h3>
            <p className= {styles.subtitle}>{subtitle}</p>
            <div className= {styles.hero} style={{backgroundImage: `url(${heroBg})`}}>
                <div className= {styles.overlay} style={{backgroundColor: `${overlayColor}`}}>
                    <h4 className= {styles.projectTitle}>{page}</h4>
                    <p className= {styles.projectDescription}>{desc}</p>
                </div>
            </div>

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

            <div className= {styles.heroInfo}>

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

            </div>     
        <div className= {styles.brand}>
            <h4 className= {styles.brandHeader}>The Brand</h4>
            <p>{brandAbout}</p>
        </div>

        <div className= {styles.brief}>
            <h4 className= {styles.brandHeader}>The Brief</h4>
            <p>{brandBrief}</p>
        </div>

        <div className = {styles.knowledge}>
            <h4 className= {styles.brandHeader}>The Takeaway</h4>
            <p>{knowledge}</p>
        </div>

        <div className= {styles.gallery}>

            <h4 className= {styles.galleryHeader}>Gallery</h4>
            {gallery.map((image, index)=>(
                <Image key={index} src={image} alt='gallery_img' width={40} height={40}/>
            ))}
        </div>

        <div className= {styles.process}>
            {testProcess.map((step, index)=>(
                step.type === 'text' ? 
                <p className= {styles.processText} key={index}>
                    {step.content}
                </p>

                :

                <Image src={step.content} alt='step' width={40} height={40} />

            ))}
        </div>

        </div>
        
        </>
    )
}