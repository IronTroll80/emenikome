'use client'

import Image from 'next/image'
import styles from './works.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function Works (){

const getTagColor = (tag: string): string => {
    if (tag === 'Frontend Development') return styles.frontend;
    if (tag === 'UI/UX Design') return styles.uiux;
    return styles.tag;
};

const works = [
    {
        title: 'Shopsafe',
        description: 'Shopsafe is an anti-counterfeit product tool that helps people check the validity and ingredients of products in supermarkets and stores.',
        image: '/shopsafe.png',
        tag: [ 'UI/UX Design'],
        date: '2026',
        link: './shopsafe'
    },
    {
        title: 'Quicklie Distributions',
        description: 'Quicklie Distributions is a B2B and B2C drink retail company that operates in Lagos, Nigeria.',
        image: '/quicklie.png',
        tag: ['Frontend Development', 'UI/UX Design'],
        date: '2025',
        link: './quicklie'
    },
    {
        title: 'Waka NG',
        description: 'Waka NG is a B2B and B2C gadget and technology retail + POS service company that operates in Lagos, Nigeria.',
        image: '/wakang.png',
        tag: ['Frontend Development', 'UI/UX Design'],
        date: '2025',
        link: './waka'
    },
    {
        title: 'NukiePass',
        description: 'NukiePass is a security and access management platform that serves offices, schools and estates in Nigeria.',
        image: '/nukiepass.png',
        tag: ['Frontend Development'],
        date: '2026',
        link: './nukiepass'
    },
    {
        title: 'AfroCanvas',
        description: 'AfroCanvas is a personal project, a platform for African creatives to connect, post and sell their artworks.',
        image: '/afrocanvas.png',
        tag: ['UI/UX Design'],
        date: '2024',
        link: './afrocanvas'
    },
    {
        title: 'Pay4Me Challenge Attempt',
        description: 'My entry for the Pay4Me revamp Twitter challenge in 2024.',
        image: '/pay4me.png',
        tag: ['UI/UX Design'],
        date: '2024',
        link: './pay4me'
    }
];

    return(
        <>
        
        <div className= {styles.container}>
            <div className= {styles.head}>
                <p>A preview of some of my work</p>
                <select name="filter" id="filter">
                    <option value="all">All Projects</option>
                    <option value="ui">UI/UX</option>
                    <option value="web">Frontend Development</option>
                    <option value="mobile">Graphics Design</option>
                </select>   
            </div>
            <div className= {styles.works}>
            {works.map((work, index) => (
                <motion.div className= {styles.work} key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 0.55 }}
                >
                    <div className= {styles.imageContainer}>
                        <Image src={work.image} alt={work.title} fill/>
                        <div className= {styles.tags}>
                            {work.tag.map((t, i) => (
                                <p className={getTagColor(t)} key={i}>{t}</p>
                            ))}
                        </div>

                    </div>
                    <div className= {styles.titleHead}>
                        <h3>{work.title}</h3>
                        <p className= {styles.date}>{work.date}</p>
                    </div>
                    <p className= {styles.description}>{work.description}</p>
                    <Link href={work.link} className= {styles.link}>Check Project Out</Link>
                </motion.div>
            ))}
            </div>
        </div>
        
        </>
    )
}