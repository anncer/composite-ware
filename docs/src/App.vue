<template>
  <router-view />
</template>

<script setup lang="ts">
import { loginToken } from './api';
import { cookie } from '@composite-ware/utils/cache'

const getAllQueryString = (src: string) => {
  const query: any = {};
  const str = src.substr(src.indexOf("?") + 1, src.length);
  const arr = str.split("&");
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i].indexOf("=");
    if (num > 0) {
      query[arr[i].substring(0, num)] = arr[i].substr(num + 1);
    }
  }
  return query;
};
loginToken()
  .then((res:any) => {
    const str = res.data
    const obj = getAllQueryString(str)
    console.log(obj, 'obj')
    obj.userid && cookie.set('USERID', obj.userid)
    obj.esp_token && cookie.set('ESP-TOKEN', obj.esp_token)
  })

</script>
