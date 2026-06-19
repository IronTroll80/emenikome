import Footer from "../components/footer";
import Header from "../components/header";
import PageContent from "../components/pageContent";
import shopsafeWireframe from '@/public/shopsafe_wireframe.png'
import shopsafeUi from '@/public/shopsafe_ui.png'

export default function Shopsafe (){
    return (
        <>
        <Header/>
        <PageContent 
            introText="Designing a product verification experience for Nigerian consumers."
            subtitle="How might we help everyday shoppers instantly verify whether a product is authentic before purchase?"
            heroBg="/shopsafe.png"
            overlayColor="#356153bb"
            page="ShopSafe"
            desc="Designing Nigeria’s First Verification App"
            skills={['UI/UX Design']}
            roles={['UI/UX Development']}
            tools={['Figma']} 
            duration="1 Month"

            brandAbout="
                ShopSafe is a product verification platform that lets Nigerian shoppers check if what they're buying is real before they pay for it.
                Counterfeits move through markets and online stores quietly — skincare, food, medication, alcohol — and by the time a buyer finds out, it's already in their cart or on their skin. ShopSafe closes that gap with a Trust Score for every product: a confidence rating built from verification data, ingredient intelligence, and a Counterfeit Probability Score (CPS) that flags risky listings before purchase.
                Scan a product. Get its verification status, ingredient breakdown, and risk signals — in seconds, not guesswork.
                ShopSafe exists for buyers who don't want to gamble on what they put on their skin, feed their family, or pay full price for.
            "

            brandBrief="The problem is specific and compelling. 
            Counterfeit products flood Nigerian markets with no fast, free way for consumers to verify authenticity. 
            ShopSafe is the answer. The target users are health-conscious shoppers, value shoppers, and parents. The stakes are real, people's health and money.
            The app acts like a product truth checker. Users search for items and the app checks the NAFDAC status, if the product is a counterfeit and how safe the ingredients inside are."
            
            knowledge= {
                `ShopSafe taught me that trust is a UX problem before it's a data problem. Users didn't need more information, they needed less friction in believing what they saw. The Trust Score forced me to translate a messy concept (verification status, ingredient flags, CPS) into one number people could act on in seconds. Compressing complexity into something legible was the hard part, even as a design exercise. Designing for low digital trust environments is different from designing for convenience. Every screen had to answer "why should I believe this" before it answered "what does this do."
              Mocking up a system this data-dependent without real backend logic showed the limits of UI alone. Interactive HTML mockups could simulate the experience, but couldn't prove the trust they were designed to communicate. That gap is exactly what a build phase would need to close."
            `}

            process={[ {
                type: 'text',
                content: 'PRD breakdown: Took the PRD AuthID provided and translated requirements into design scope. Pulled out what needed to exist for MVP (scan flow, Trust Score, CPS, ingredient intelligence, help screens) vs. what could wait, and flagged ambiguous requirements that needed design decisions to resolve.'
            },
            {
                type: 'text',
                content: `Information architecture + user flows — Structured the full app around the core loop: scan a product, land on a result, drill into ingredient detail, exit to help if something's unclear. Mapped how Trust Score and CPS would surface at each step so the user never had to ask "what am I looking at."`
            },
            {
                type: 'text',
                content: `Wireframing — Low-fidelity layouts for every MVP screen. Prioritized hierarchy first: what the eye hits in the first second on a result screen, where risk signals sit relative to product info, how dense the ingredient breakdown could get before it stopped being scannable.`
            },
            {
                type: 'image',
                content: '/shopsafe_wireframe.png'
            },
            {
                type: 'text',
                content: `Took wireframes to full visual design. Built the screen system, the Trust Score and CPS visual treatment (color, iconography, scoring display), ingredient intelligence UI, help screens, and logo concepts, all tied together into one consistent visual language built for fast trust signals over decoration.`
            },
            {
                type: 'image',
                content: '/shopsafe_ui.png'
            },
            {
                type: 'text',
                content: `Prototyping — Built interactive HTML mockups of the full flow so the experience could be clicked through end to end, not reviewed as static screens. This is what got handed off and used to pressure-test the design decisions before any real build.`
            }]
            }
            
            gallery = {[ '/shopsafe_wireframe.png', '/shopsafe_ui.png', '/shopsafe.png']}/>
        <Footer/>
        
        </>
    )
}