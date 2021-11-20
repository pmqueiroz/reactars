import { useEffect, useRef } from 'react'

export const useClickAway = (onClickAway: () => void) => {
   const node = useRef<HTMLInputElement>(null)

   const handler = (event: Event) => {
      const { target } = event

      if(node && node.current && target instanceof Node) {
         if(node.current.contains(target)) return

         onClickAway()
      }
   }

   useEffect(() => {
      document.addEventListener('click', handler)

      return () => document.removeEventListener('click', handler)
   }, [])

   return node
}