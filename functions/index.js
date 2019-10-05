
'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.listenNewFans = functions.firestore.document('/artist-fav/{artistId}').onWrite((change, context) => {
  const artistId = context.params.artistId
  console.log(`Cambiaron los fans del artista ${artistId}`, change.after.data())
})

