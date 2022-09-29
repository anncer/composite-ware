<template>
  <router-view />
</template>

<script setup lang="ts">
import { loginToken, getCrypto, getUserInfo } from './api';
import { cookie } from '@composite-ware/utils/cache'
import CryptoJS from 'crypto-js'

function encrypt(data: any, crypto: any) {

  const enc = (d:any) => CryptoJS.enc.Utf8.parse(d)

  const key = enc(crypto.key)
  const iv = enc(crypto.iv)

  const cfg = { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }

  const aes = (k:any) => CryptoJS.AES.encrypt(enc(k), key, cfg).ciphertext.toString()

  const result:any = {}
  Object.keys(data).forEach(k => { result[aes(k)] = aes(data[k]) })

  return aes(JSON.stringify(result))
}

const loginSimulation = () => {
  getCrypto()
    .then((res:any) => {
      const password = window.location.host.includes('10.28.89.11')? 'PTResp413Admin@123' : 'PTResp413@Admin123'
      const f = {
        username: 'xu_kun11',
        password
      }
      loginToken(encrypt(f, res.data))
        .then((r:any) => {
          cookie.set('ESP-TOKEN', r.data)
        })
    })
}
const token = cookie.get("ESP-TOKEN")
if (!token) {
  loginSimulation()
} else {
  getUserInfo(token)
    .then(res => {
      console.log(res, 'response')
      console.log('已登录')
    })
    .catch(e => {
      console.log(e)
      console.log(e.code, '')
    })
}
</script>
