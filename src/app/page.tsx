import Image from 'next/image'
import Header from './components/Header'
import Promotion from './components/Promotion'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function Home() {
  return (
   <>
   <Header/>
   <Promotion/>
   <Faq/>
   <Footer/>
   </>
  )
}
