import Footer from "../components/footer";
import Header from "../components/header";
import PageContent from "../components/pageContent";

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
                content: 'Lorem Ipsum dolor sit amet consecteur'
            },
            {
                type: 'image',
                content: '/example.jpg'
            }]
            }
            
            gallery = {[ '/me.png']}/>
        <Footer/>
        
        </>
    )
}