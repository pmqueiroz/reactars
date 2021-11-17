import 'nextra-theme-docs/style.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { lastSha } from '../status.json'

export default function Nextra({ Component, pageProps }: AppProps) {

   useEffect(() => {
      console.info(`%c Last SHA: ${lastSha}`, `color: purple; font-size: 2rem;`)
   })

  return <Component {...pageProps} />
}