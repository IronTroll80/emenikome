'use client'

import styles from './brands.module.css'
import { motion } from "framer-motion";

export default function Brands (){

    const brands = [ 'waka', 'nukiepass', 'spikk', 'shopsafe', 'quicklie']

    return (
        <motion.div className={styles.container}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.55 }}
        >
            <h3>Some of the brands i've worked with ↓</h3> 
            <div className={styles.brands}>
                {brands.map((brand, index) => (
                    <img src={`/${brand}logo.png`} alt={brand} key={index}/>
                ))}
            </div>
        </motion.div>
    )
}