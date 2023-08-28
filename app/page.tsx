 import Header from '../components/Header'
 import Qualificatoins from '../components/Qualifications'
 import Services from '../components/Services'
 import Projects from '../components/Projects'
 import ProjectsCard from '../components/ProjectsCard'
 import Contact from '../components/Contact'
 import ContactForm from '../components/ContactForm'
 import CommentsForm from '../components/CommentsForm'

export default function Home() {
  return (
    <main className=" ">
    <Header />
    <Qualificatoins />
    <Services />
    <Projects />
    
    </main>
  )
}
