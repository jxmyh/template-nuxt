<script setup lang="ts">
// 使用 store
import { useCounter } from '~/store/demo'

const store = useCounter()

const { value: count } = storeToRefs(store)
</script>

<template>
  <div class="flex items-center flex-col gap-2">
    <h1>Index Page</h1>
    <p>{{ count }}</p>
    <div>
      <NButton>hello</NButton>
    </div>
  </div>
  <h1 class="bg-blue-200">
    this is a nuxt3 starter!
  </h1>
  <div class="i-vscode-icons-file-type-nuxt text-20" />
  <div class="i-logos-nuxt text-35 color-black" />
  <div i-vscode-icons-file-type-applescript text-40 color-black />
  <div color-pink class="text-50 fw-700">
    400
  </div>
</template>

<style>
body {
  background-color: #fff;
}
</style>
