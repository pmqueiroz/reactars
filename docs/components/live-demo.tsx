import { ReactNode } from 'react'
import Reactars from 'reactars'
import { useForm, Controller } from 'react-hook-form'
import { ColorPicker } from '../components/color-picker'

/**
 * @todo import this from package
*/
// import { AvatarProps, AllowedBadgeTypes, Status } from 'reactars'

type AvatarProps = any
type AllowedBadgeTypes = any
type Status = any

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
   children: ReactNode
}

export const Wrapper = ({ children, ...props }: WrapperProps) => (
   <div
      style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'column',
         width: '100%',
         paddingTop: '3rem'
      }}
      {...props}
   >{children}</div>
)

interface FormProps extends Omit<AvatarProps, 'badgeType'> {
   badgeType: AllowedBadgeTypes
   count: number
   notificationTextColor: string
   status: Status
   notificationColor: string,
   busyColor: string,
   idleColor: string,
   offlineColor: string,
   onlineColor: string
}

export const LiveDemo = () => {
   const defaultValues: FormProps = {
      badgeType: 'status',
      name: 'Reactar',
      badgePosition: 'top-right',
      radii: 'circle',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
      backgroundColor: '#2a2c2c',
      size: 250,
      status: 'online',
      count: 0,
      notificationTextColor: '#ffffff',
      notificationColor: '#e65a4d',
      busyColor: '#e65a4d',
      idleColor: '#f7c656',
      offlineColor: '#cccccc',
      onlineColor: '#50ca42'
   }

   const { register, watch, control } = useForm<FormProps>({ defaultValues })

   // @ts-ignore
   const badgeType = watch('badgeType')
   const name = watch('name')
   const badgePosition = watch('badgePosition')
   const radii = watch('radii')
   const url = watch('url')
   const backgroundColor = watch('backgroundColor')
   const size = watch('size')
   const status = watch('status')
   const count = watch('count')
   const notificationTextColor = watch('notificationTextColor')
   
   const notificationColor = watch('notificationColor')
   const busyColor = watch('busyColor')
   const idleColor = watch('idleColor')
   const offlineColor = watch('offlineColor')
   const onlineColor = watch('onlineColor')

   return (
      <>
      <Wrapper style={{ 
         height: '300px', 
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'column',
         width: '100%',
         marginTop: '3rem'
      }}>
         <Reactars
            badgeType={badgeType || 'none'}
            count={count}
            name={name}
            badgePosition={badgePosition}
            backgroundColor={backgroundColor}
            radii={radii}
            url={url}
            size={size}
            status={status}
            notificationTextColor={notificationTextColor}
            badgeColors={{
               notification: notificationColor,
               busy: busyColor,
               idle: idleColor,
               offline: offlineColor,
               online: onlineColor
            }}
         />
      </Wrapper>
      <Wrapper>
         <table>
            <tr>
               <th>Parameter</th>
               <th>Controller</th>
            </tr>
            <tr>
               <td>badgeType</td>
               <td>
                  <div
                        style={{
                           display: 'flex',
                           gap: '10px'
                        }}
                  >
                     <input type="radio" {...register('badgeType')} value="none"/>
                     <label style={{ fontSize: '12px' }}>None</label>
                     <input type="radio" {...register('badgeType')} value="notification"/>
                     <label style={{ fontSize: '12px' }}>Notification</label>
                     <input type="radio" {...register('badgeType')} value="status"/>
                     <label style={{ fontSize: '12px' }}>Status</label>
                  </div>
               </td>
            </tr>
            <tr>
               <td>name</td>
               <td><input style={{ borderRadius: '7px', backgroundColor: 'rgba(42, 44, 44, 0.1)', padding: '3px' }} {...register('name')}></input></td>
            </tr>
            <tr>
               <td>badgePosition</td>
               <td>
                  <div
                        style={{
                           display: 'flex',
                           gap: '10px'
                        }}
                  >
                     <input type="radio" {...register('badgePosition')} value="top-left"/>
                     <label style={{ fontSize: '12px' }}>Top Left</label>
                     <input type="radio" {...register('badgePosition')} value="top-right"/>
                     <label style={{ fontSize: '12px' }}>Top Right</label>
                     <input type="radio" {...register('badgePosition')} value="bottom-right"/>
                     <label style={{ fontSize: '12px' }}>Bottom Right</label>
                     <input type="radio" {...register('badgePosition')} value="bottom-left"/>
                     <label style={{ fontSize: '12px' }}>Bottom Left</label>
                  </div>
               </td>
            </tr>
            <tr>
               <td>backgroundColor</td>
               <td>
                  <Controller
                     name="backgroundColor"
                     control={control}
                     render={({ field: { onChange, value } }) => <ColorPicker value={value} onChange={onChange} />}
                  />
               </td>
            </tr>
            <tr>
               <td>radii</td>
               <td>
                  <div
                     style={{
                        display: 'flex',
                        gap: '10px'
                     }}
                  >
                     <input type="radio" {...register('radii')} value="circle"/>
                     <label style={{ fontSize: '12px' }}>Circle</label>
                     <input type="radio" {...register('radii')} value="square"/>
                     <label style={{ fontSize: '12px' }}>Square</label>
                     <input type="radio" {...register('radii')} value="rounded"/>
                     <label style={{ fontSize: '12px' }}>Rounded</label>
                  </div>
               </td>
            </tr>
            <tr>
               <td>url</td>
               <td><input style={{ borderRadius: '7px', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset', padding: '3px' }} {...register('url')}></input></td>
            </tr>
            <tr>
               <td>size</td>
               <td><input type="range" {...register('size')} min="36" max="250"></input></td>
            </tr>
            <tr>
               <td>status</td>
               <td>
                  <div
                     style={{
                        display: 'flex',
                        gap: '10px'
                     }}
                  >
                     <input type="radio" {...register('status')} value="online"/>
                     <label style={{ fontSize: '12px' }}>Online</label>
                     <input type="radio" {...register('status')} value="busy"/>
                     <label style={{ fontSize: '12px' }}>Busy</label>
                     <input type="radio" {...register('status')} value="offline"/>
                     <label style={{ fontSize: '12px' }}>Offline</label>
                     <input type="radio" {...register('status')} value="idle"/>
                     <label style={{ fontSize: '12px' }}>Idle</label>
                  </div>
               </td>
            </tr>
            <tr>
               <td>count</td>
               <td>
                  <input type="range" min="0" max="99" {...register('count')} />
               </td>
            </tr>
            <tr>
               <td>notificationTextColor</td>
               <td>
                  <Controller
                     name="notificationTextColor"
                     control={control}
                     render={({ field: { onChange } }) => <ColorPicker onChange={onChange} value="#ffffff" />}
                  />
               </td>
            </tr>
         </table>
      </Wrapper>
      <Wrapper>
      <table>
         <tr>
            <th>BadgeColor</th>
            <th>Controller</th>
         </tr>
         <tr>
            <td>notification</td>
            <td>
               <Controller
                  name="notificationColor"
                  control={control}
                  render={({ field: { onChange, value } }) => <ColorPicker onChange={onChange} value={value} />}
               />
            </td>
         </tr>
         <tr>
            <td>busy</td>
            <td>
               <Controller
                  name="busyColor"
                  control={control}
                  render={({ field: { onChange, value } }) => <ColorPicker onChange={onChange} value={value} />}
               />
            </td>
         </tr>
         <tr>
            <td>idle</td>
            <td>
               <Controller
                  name="idleColor"
                  control={control}
                  render={({ field: { onChange, value } }) => <ColorPicker onChange={onChange} value={value} />}
               />
            </td>
         </tr>
         <tr>
            <td>offline</td>
            <td>
               <Controller
                  name="offlineColor"
                  control={control}
                  render={({ field: { onChange, value } }) => <ColorPicker onChange={onChange} value={value} />}
               />
            </td>
         </tr>
         <tr>
            <td>online</td>
            <td>
               <Controller
                  name="onlineColor"
                  control={control}
                  render={({ field: { onChange, value } }) => <ColorPicker onChange={onChange} value={value} />}
               />
            </td>
         </tr>
         </table>
      </Wrapper>
      </>
   )
}