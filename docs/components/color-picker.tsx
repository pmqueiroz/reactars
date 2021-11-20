import { usePopper } from 'react-popper'
import { CSSProperties, useLayoutEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import { useClickAway } from '../hooks/clickAway'

type Color = CSSProperties['color']

interface ColorPickerProps {
   name?: string
   disabled?: boolean
   value?: Color
   onChange?: (nextValue: Color) => void
}

export const ColorPicker = (props: ColorPickerProps) => {
   const { disabled, value: initialValue } = props 

   const [value, setValue] = useState<Color>(initialValue || '#000000')
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null)
   const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)

   const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: 'top',
   })

   useLayoutEffect(() => {
      if(props.onChange && !disabled) {
         props.onChange(value)
      }

   }, [value])

   return (
      <div 
         ref={useClickAway(() => setIsOpen(false))}
      >
         <div
             style={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'row'
            }}
         >
            <div
               ref={setReferenceElement}
               className="color" 
               style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: value, 
                  borderRadius: '5px', 
                  cursor: 'pointer',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset'
               }}
               onClick={() => setIsOpen(!isOpen)}
            />
            <p
               style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  margin: '0 0 0 5px'
               }}
            >{value}</p>
         </div>
         <div 
            ref={setPopperElement}
            style={{
               borderRadius: '10px',
               boxShadow: '0px 4px 4px rgba(45, 55, 66, 0.03)',
               zIndex: 600,
               opacity: isOpen ? 1 : 0,
               visibility: isOpen ? 'visible' : 'hidden',
               transition: 'opacity 0.2s ease-in-out',
               backgroundColor: '#fff',
               padding: '3px',
               margin: '10px',
               ...styles.popper
            }}
            {...attributes.popper}
         >
            <HexColorPicker color={value} onChange={setValue}/>
         </div>
      </div>
   )
}