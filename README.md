## Challenge 11 del curso de Desarrollo Móvil de Coderhouse

Para poder resolver este challenge seguir los siguientes pasos

1. Hacer un **fork** este repositorio
1. Una vez hecho el **fork**, hacer un clon copiando la URL (en el botón verde) y corriendo `git clone <URL>` en la consola
1. Una vez clonado, moverse dentro de la carpeta del proyecto y correr `npm install` (o `yarn`) para instalar las dependencias necesarias
1. Hacer un **nuevo branch** con tu nombre y apellido para identificarte (ej. `git checkout -b gonzalo-aguirre`)
1. Correr el proyecto usando `expo start`
1. Resolver el enunciado, **haciendo un nuevo commit al resolver cada parte**
1. Hacer un **push** del nuevo branch
1. Desde **github.com** crear un nuevo **pull request** desde ese branch hacia master

### Enunciado



#### Usando la CLI de firebase
1. Instalar las `firebase-tools` usando npm o yarn
```
npm install -g firebase-tools
// o con yarn
yarn global add firebase-tools
```
1. Loguearse desde la CLI corriendo
```
firebase login
```
  > IMPORTANTE: usar la misma cuenta con la que tenemos creada la cuenta de Firebase

#### Creando una Firebase Cloud Function

1. Dentro de la carpeta de este repositorio correr `firebase init functions`
1. Elegir la opción de "Crear un nuevo proyecto"
1. Elegir que **NO** use ESLint

#### Escuchando cambios en la DB
1. Dentro del archivo `functions/index.js` copiar lo siguiente
```js
'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.listenNewFans = functions.firestore.document('/favoritos/{artistId}').onWrite((change, context) => {
  const artistId = context.params.artistId
  console.log(`Cambiaron los fans del artista ${artistId}`, change.after.data())
})

```
1. Correr `firebase deploy --only functions` para _deployar_ la función recién creada
1. Si nos pide indicar el proyecto, corremos `firebase use --add` y elegimos el proyecto que estamos usando
