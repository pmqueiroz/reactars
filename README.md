<div align="center">

# Reactars
A React lib to generate easily customizable avatars

![GitHub](https://img.shields.io/github/license/pmqueiroz/reactars?style=flat-square)
![npm](https://img.shields.io/npm/v/reactars?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/reactars?style=flat-square)


   
</div>

## Installation

### Using Yarn

```
yarn add reactars
```

### Using Npm

```
npm i reactars
```
## Usage

### Importing

You can import reactars component as default and use all modes 

```ts
import Reactars from 'reactars'
```
or import separately each one

```ts
import { ReactarsNotification, ReactarsStatus, ReactarsDefault } from 'reactars'
```

### Examples

<img width="450px" src="./.github/assets/examples.png" />

### Usage Examples

```js
<Reactars badgeType="status" name="pmqueiroz" status="online" />

<Reactars badgeType="notification" name="pmqueiroz" count={3} />
```
## Parameters

| Parameter             | Required               | Default         | Type                                                   |
| --------------------- | ---------------------- | --------------- | ------------------------------------------------------ |
| badgeType             | yes                    | "none"          | "none", "notification", "status"                       |
| name                  | yes                    | "Reactars"       | string                                                 |
| badgePosition         | no                     | "top-right"     | "top-left", "top-right", "bottom-right", "bottom-left" |
| badgeColor            | no                     | [BadgeColorsDefaults](#BadgeColorsDefaults) | [BadgeColorsDefaults](#BadgeColorsDefaults)                                 |
| radii                 | no                     | "circle"        | "circle", "square", "rounded"                          |
| url                   | no                     | undefined       | string                                                 |
| backgroundColor       | no                     | "#2A2C2C"       | CSSProperties['color']                                 |
| size                  | no                     | 48              | px                                                     |
| status                | if type "status"       | online          | "online", "busy", "offline", "idle"                    |
| count                 | if type "notification" | undefined       | number                                                 |
| notificationTextColor | if type "notification" | "#FFFFFF"       | CSSProperties['color']                                 |
                                                   

> Obs.: Size will be converted to rem in base16

#### BadgeColorsDefaults

```ts
{
   notification: '#E65A4D',
   busy: '#E65A4D',
   idle: '#F7C656',
   offline: '#CCCCCC',
   online: '#50CA42'
}
```
## License

[MIT](https://github.com/pmqueiroz/reactars/blob/master/LICENSE)

