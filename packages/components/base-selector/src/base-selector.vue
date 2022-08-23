<template>
<!-- class="rp-selector" -->
  <el-dialog
    v-model="isShow"
    :title='title'
    append-to-body
    :width="width"
    @close="handleClosed"
  >

    <el-row class="bi-params-line clearfix">
      <el-col :span="24">
        <el-form
          ref="searchParams"
          label-position="top"
          :model="searchParams"
          inline
          label-width="80px"
        >
        <el-form-item v-for="it in query" :key="it.code" :label="it.label">
          <template v-if="it.type==='input'">
            <el-input v-model="searchParams[it.code]" clearable></el-input>
          </template>
          <template v-if="it.type==='select'">
            <el-select v-model="searchParams[it.code]" placeholder="请选择" filterable clearable>
              <el-option
               v-for="opt in searchParamsOptions[it.code]"
              :label="opt[it.optLabel || 'label']"
              :value="opt[it.optValue || 'value']"
              :key="opt.partyCode"></el-option>
            </el-select>
          </template>
        </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <ce-table></ce-table>
    <div slot="footer">
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
      <el-button @click="handleCancle">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch, toRefs } from 'vue';
import { baseSelectorProps, baseSelectorEmits } from './props'
import { CeTable } from '@composite-ware/components/table/index'
import { isEmpty } from '@composite-ware/utils';
import Api from '@composite-ware/service'


export default defineComponent({
  name: "CeBaseSelector",
  props: baseSelectorProps,
  components: { CeTable },
  emits: baseSelectorEmits,
  setup(props, {emit}) {
    const { title,  show, width, query } = toRefs(props)
    const isShow = ref(false)

    watch(show, (value) => {
      isShow.value = value
    })

    const searchParams:any = reactive({})
    const searchParamsOptions:any = reactive({})

    const handleConfirm = () => {
      console.log('confirm')
    }

    const handleCancle = () => {
      console.log('handleCancle')
    }

    const handleClosed = () => {
      console.log('handleClosed')
      emit('closed', false)
    }
    const urls:any[] = []
    if (query && query.value && !isEmpty(query.value)) {
      query.value.forEach(q => {
        searchParams[q.code] = null
        if (q.url) {
          const method = q.method?.toUpperCase() || 'GET'
          const params:any = {
            url: q.url,
            method
          }
          if (q.headers) {
            params.headers = q.headers
          }
          urls.push(Api.request(params))
        }


      });
      Promise.all(urls)
        .then(responseArr => {
          responseArr
          console.log(responseArr[0], 'responseArr')
        })
      console.log(urls, 'urls')
    }

    return {
      isShow,
      title,
      width,
      query,
      handleConfirm,
      handleCancle,
      handleClosed,
      searchParams,
      searchParamsOptions
    }
  }
})
</script>
