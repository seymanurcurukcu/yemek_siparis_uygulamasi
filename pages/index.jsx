import Image from 'next/image'
import Home from './home'
import Head from 'next/head'
import Header from '../components/layout/Header'
import Input from '../components/form/Input'
export default function Index() {
  return (
    <div className=''>
       <Head>
        <title>Yemek Sepeti</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
       </Head>
      <Home/>
     
    </div>
  )
}
