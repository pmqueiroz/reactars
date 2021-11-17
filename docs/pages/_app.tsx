import 'nextra-theme-docs/style.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import status from '../status.json'

export default function Nextra({ Component, pageProps }: AppProps) {

   useEffect(() => {
      console.info(`%c Last SHA: ${status.lastSHA}`, `color: purple; font-size: 2rem;`)
   })

  return <Component {...pageProps} />
}