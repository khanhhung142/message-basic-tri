import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router)
  useEffect( ()=>{
    if (router.pathname === '/_error')
    router.push('/')
  }
  , [])

  return (
  <>
  <Header />
    <Component {...pageProps} />
  </>
  )
  
}

export default MyApp
