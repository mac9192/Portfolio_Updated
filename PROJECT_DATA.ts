
 import {Project, Qualifications} from './types/collection'

export const PROJECT_DATA: Project[] = [
    {
        id: "1",
        title: "CosmWasm",
        badges: ["Linux","CosmWasm", "Tendermint", "Validator", "IgniteSDK", "Blockchain","Proof-Of-Stake"],
        intro: "CosmWasm stands as the premier smart contract engine within the expansive Cosmos ecosystem. As an enthusiastic participant in the CosmWasm Academy, I proudly attained the Confio CosmWasm Certificate upon accomplishing this remarkable undertaking. Over the course of eight intensive weeks, I engaged in a comprehensive curriculum dedicated to the creation of ingenious smart contracts and dApps tailored for the dynamic Cosmos Blockchain realm.",
        techUsed:"The culmination of my efforts resulted in the development of a multifaceted project that encompassed diverse facets. These encompassed the establishment of a sophisticated wallet system, seamless integration with the keplr interface, and adept querying of information and contract methods from a CW20 contract. Notably, users were seamlessly guided through the process of inputting their wallet address and specifying the quantity of test tokens for transfer—effortlessly orchestrating transactions from their personal wallet to a recipient address on the Confio Malaga testnet. ",
        issues:"This venture delved into the intricacies of blockchain architecture at its foundational layer. A profound understanding of diverse elements such as active Proof-of-Stake Validator Nodes setup, the nuances of Blockchain Cryptography, adept maneuvering within Linux environments, mastery over the Tendermint protocols, harnessing the potential of the Ignite SDK, seamless utilization of CosmWasm and the Cosmology Kit, among other sophisticated facets, were prerequisites to its successful realization.",
        learned:"Having emerged triumphant from this enriching academy experience, I have attained a comprehensive comprehension of the intricate Cosmos IBC ecosystem. My journey spanned several months of rigorous study, encompassing intricate architectural principles and the multifaceted realm of blockchain programming. The gratification derived from this odyssey was unparalleled, and my engagement was further enriched by my participation in the esteemed Cosmoverse 2022 event hosted in Medellin, Colombia.",
        image: "/assets/cos.svg",
        image1: "/assets/cosm1.png",
        image2: "/assets/cosm2.png",
        image3: "/assets/cosm3.png",
        image4: "/assets/cosm7.svg",
        image5: "/assets/certificate.png",
        slug:"cosmwasm",
        url:"https://cosmology-xpt3.vercel.app",
    },
    {
        id: "2",
        title: "GymWarrior Fitness",
        badges: ["React","RestAPI", "RapidAPI", "MaterialUI",],
        intro: "One of my favorite things to do on my free time is exercising and going to the gym every week. It is an activity that clears my mind and helps increase my focus and creativity. So I thought it would be a great idea to create an app that could help users search for exercises for individual body parts that a user would like to target. Users Can search for a given body part such as arm and will receive different exercises for that body part, informational how-to, and corresponding YouTube videos that will help facilitate exercises through videos exercise examples in order to follow proper techniques.",
        techUsed:"This was my first API driven project where the goal was to fetch exercise information from RapidAPI. I chose to use React as a framework due to the scale of the project and the neccessity of seperating components and passing props. Additionally, I used Material UI as the frontenf framework and stylying.",
        issues:"Amongst my issues with this was learning how to fetch API and then passing them down to components or running some type of logic on the API data recieved. The project also challenged me in creating a search component for the application that gives users the response they are searching for.",
        learned:"This was one of those projects that really allowed me to understand how APIs work and how to pass them down the componets. It was challenging in many ways because I was not very familiar on running fetch methods on APIS, however upon completion I feel confident about working with REST APIs. ",
        image: "/assets/gymwarrior.svg",
        image1: "/assets/gym1.png",
        image2: "/assets/gym2.png",
        image3: "/assets/gym3.png",
        image4: "/assets/gym5.png",
        image5: "/assets/gym6.png",
        slug:"gym-warrior",
        url:"https://gymwarrior.netlify.app",
    },
    {
        id: "3",
        title: "Modern Hip Hop Blog",
        badges: ["Next.JS","HygraphCMS", "GraphQL", "Blog","API"],
        intro: "My passion for music has extended beyond mere appreciation to the realm of beat production and song recording, both for personal enjoyment and collaboration with fellow artists. Inspired by renowned Hip Hop platforms like XXL and Complex Magazine, I embarked on a creative journey to establish my very own Hip Hop Blog site.",
        techUsed:"To bring this vision to life, I harnessed the power of Next.js and a headless CMS. This strategic choice not only ensured a user-friendly interface but also enabled non-technical users to seamlessly manage blog content, including additions, deletions, and updates. For the CMS, I opted for the dynamic Hygraph CMS, which leverages GraphQL as its querying language. With this foundation, I meticulously crafted the essential schemas for a comprehensive blog platform, encompassing elements such as titles, authors, descriptions, articles, and categories. The inclusion of a reader engagement facet manifested through a comment section, allowing visitors to share their thoughts on the posts. ",
        issues:"Venturing into uncharted territory, I encountered challenges that enriched my skill set. One such complexity was devising a system to filter blog posts based on categories, featured content, and recent posts—a puzzle that required thoughtful solutions. Additionally, architecting the comment section posed unique intricacies. Unlike a straightforward data retrieval, enabling readers to leave comments demanded the creation of a dedicated API route, ensuring smooth interaction with the CMS for posting comments. ",
        learned:"This project resonates with me due to its inherent versatility. The architectural blueprint developed can be readily adapted to diverse domains, from dynamic websites and blogs to e-commerce platforms, fostering efficient data management across various contexts. The journey encompassed elements of technology, creativity, and problem-solving, marking a significant step in my technical expertise and underscoring the potential for innovation in website development.",
        image: "/assets/hip.svg",
        image1: "/assets/hip1.png",
        image2: "/assets/hip2.png",
        image3: "/assets/hip3.png",
        image4: "/assets/hip4.png ",
        image5: " ",
        slug:"modern-hip-hop",
        url:"https://modernhiphop.vercel.app",
    },
    {
        id: "4",
        title: "Cheves Briceno Attorneys at Law",
        badges: ["Nextjs.13","Internationalization (En/ESP)","Directus CMS", "Website Migration", "Dynamic SEO", "Blog", "Vercel"],
        intro: "Prior to delving into the realm of web development, I pursued a degree in political science with aspirations of becoming a lawyer. My fascination with law fueled my journey, leading me to embark on a distinctive project: crafting a prototype for a personal injury and immigration law firm. This endeavor was prompted by their desire for a website revamp. However, there was a twist—their current website was hosted on WordPress, and I proposed a transition to the faster and more contemporary Next.js framework. This shift necessitated a migration process, including transferring their existing SEO. The challenge was daunting, but I embraced it as an invaluable learning opportunity.",
        techUsed:"The cornerstone of the website's design lay in integrating a headless blog, employing the new Next.js 13 app directory and the CMS Directus to facilitate dynamic blog additions while augmenting SEO presence. I orchestrated the layout to be both marketable and visitor-friendly, ensuring clarity about the firm's services and ethos. Essential information such as addresses, social media links, and a contact form were strategically positioned above the header fold, enhancing user visibility. The implementation encompassed dynamic SEO, catering to international clients through language options in english and spanish, crafting a comprehensive and dynamic sitemap, and integrating Google Analytics—each element essential for a polished business website.",
        issues:"The prototype's development was marked by formal communication with the law firm. This professional environment was uncharted territory for me, as it entailed migrating the website from WordPress to Next.js without compromising its SEO integrity. The stakes were high, but I navigated through, ultimately presenting a prototype that boasts improved aesthetics, elevated Google PageSpeed scores, and a Next.js framework that enhances SEO.",
        learned:"The law firm's response was positive, affirming the merit of the prototype. Moving forward, our collaboration will continue as we fine-tune the website to align with their vision. This experience enriched my knowledge and skills substantially. It provided insights into constructing professional business websites, including implementing a user-friendly CMS for blog management, offering internationalization options, and executing comprehensive SEO optimizations through dynamic sitemaps. In sum, this venture was transformative—a journey marked by challenges, growth, and the acquisition of skills necessary for crafting sophisticated and functional business websites. ",
        image: "/assets/cblogo.svg",
        image1: "/assets/briceno1.png",
        image2: "/assets/briceno2.png",
        image3: "/assets/briceno3.png",
        image4: "/assets/briceno5.png",
        image5: "/assets/briceno7.png",
        slug:"cheves-briceno",
        url:"https://www.vttestweb.com/en",
    },
    {
        id: "5",
        title: "GenjutsuATL",
        badges: ["HTML","CSS","JavaScript", "Mobile Responsive",],
        intro: "This marked my inaugural website project for an actual business entity, namely GenjutsuATL—a filmmaking agency with a niche in crafting music videos for underground artists. My objective was to fashion a modern, visually captivating digital presence that mirrored the agency's filmmaking finesse.",
        techUsed:"The construction of the website relied on fundamental web technologies: HTML, CSS, and JavaScript. These tools formed the backbone of the site's architecture, enabling the incorporation of essential features. These included mobile responsiveness for optimal user experience on various devices, a contact form seamlessly linked to Netlify, ensuring efficient communication, and strategic integration of video players that demonstrated the agency's portfolio. Furthermore, dynamic animations were skillfully woven into the site's fabric to elevate user engagement.",
        issues:"Amidst the project's challenges, a two-fold learning journey emerged. Beyond the technical complexities of website construction, I gained invaluable insights into client interaction and brand representation. This duality fostered growth not only in my coding abilities but also in my capacity to align technological solutions with business goals.",
        learned:"From project initiation to deployment, the learning curve was rich and transformative. As a culmination, the website's outcome was a source of satisfaction. The video featured on the homepage eloquently encapsulated the filmmakers' artistry, providing a tangible representation of their unique capabilities.",  
        image: "/assets/genju.svg",
         image1: "/assets/gen2.png",
         image2: "/assets/gen3.png",
         image3: "/assets/gen4.png",
         image4: "/assets/gen5.png",
         image5: "/assets/gen1.png",
          slug:"genjutsuatl",
          url:"https://genjutsuatl.com",
         
    },
    {
        id: "6",
        title: "VisionTech",
        badges: ["Nextjs.13","Tailwind CSS","Framer Motion", "Vercel"],
        intro: "Enter the realm of VisionTech—a dynamic prototype that pushes the boundaries of web development. This project wasn't just about building a website; it was a voyage of discovery, fueled by a hunger for new knowledge and skills.",
        techUsed:"I set out to master the Next.js 13 app directory, harnessing its potential for innovative web experiences. In this endeavor, I seamlessly integrated the prowess of Tailwind CSS and the magic of Framer Motion. These tools weren't just additions; they were creative accelerators, infusing the project with sleek design and captivating animations. ",
        issues:"Tailwind CSS transformed the way I approached styling. With minimal code, I conjured intricate designs, realizing the art of less is more in a stunning way. On the other hand, Framer Motion unlocked the realm of animations. Elements danced, text flowed, and interactions came to life—a symphony of motion that elevated user engagement.",
        learned:"Exploring the synergy of Next.js 13, Vercel, and Tailwind was electrifying. This modern trio paved the way for more seamless client delivery and smoother development workflows, inspiring a new era of web development possibilities.VisionTech isn't just a prototype; it's a testament to my drive for innovation and constant growth. As I look back on this journey, I'm reminded that the world of web development is ever-evolving, brimming with tools and opportunities waiting to be discovered.",
        image: "/assets/vtblack-4.svg",
        image1: "/assets/vt1.png",
        image2: "/assets/vt2.png",
        image3: "/assets/vt3.png",
        image4: "/assets/vt4.png",
        image5: "/assets/vt5.png",
        slug:"visionTech",
        url:"https://vision-tech-web-lkr5.vercel.app",
    },
    
 

];
//Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
 //Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
 export const PROJECT_QUALIFICATIONS: Qualifications[] = [
    {
        id: "1",
        image: "",
        title:"Designer",
        descriptionIntro:"I value quality within the content structure, clean and inviting designs",
        thingsI:"Things I enjoy designing:",
        description:["UX", "UI", "Web","Logos"],
        tools:"Design Tools: ",
        skills:["Figma", "Adobe Creative Cloud", "Wireframing", "Color Picker", "Google Fonts","Adobe Color Wheel", "Pen & Paper",],
      
    },
    {
        id: "2",
        image: "",
        title:"Frontend Developer",
        descriptionIntro:"I like to code things from scratch and enjoy wtahcing designs come to life on the browser",
        thingsI:"Languages I speak:",
        description:["Typescript","JavaScript","HTML","CSS"],
        tools:"Dev Tools:",
        skills:["Next.js","React","Node.Js","Express.Js","MongoDB","GraphQL", "RESTful APIs", "Version Control (Git)","Vercel","Web Security","Tailwind", "Framer Motion"],
      
    },
    {
        id: "3",
        image: "",
        title:"Blockchain",
        descriptionIntro:"Navigating the Cosmos: My Journey un Powering the Future of Blockchain through Proof-of-Stake",
        thingsI:"Things I enjoy in Blockchain:",
        description:["Validator","Node","dApp"],
        tools:"Blockchain Tools",
        skills:["Cosmos Ecosystem","Proof-of-Stake","Tendermint", "Rust", "CosmWasm", "Validator", "Linux Ubuntu", "AWS EC2", "Linode", "Nginx"]
      
    },

];
