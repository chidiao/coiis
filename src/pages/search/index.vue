<template>
  <div class="w-full max-w-screen-2xl mx-auto p-5 pb-0">
    <div class="w-full rounded-xl bg-[#fafafa] min-h-[144px] p-5">
      <div class="size-full flex flex-col justify-center items-center gap-5">
        <div class="text-2xl font-bold">Sports APIs</div>
        <div class="text-sm text-gray-500">
          Sports APIs encompass various categories such as sports odds, top scores, NCAA, football, women's sports, and
          trending sports news.
        </div>
      </div>
    </div>

    <div class="w-full flex mt-8 mx-auto">
      <CategoryList />

      <div class="grow rounded-xl border p-8">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold">All Results (650)</div>

          <a-select ref="select" v-model:value="value" class="w-32">
            <a-select-option value="aaa">aaa</a-select-option>
            <a-select-option value="bbb">bbb</a-select-option>
            <a-select-option value="ccc">ccc</a-select-option>
          </a-select>
        </div>

        <a-input placeholder="Search" class="my-8">
          <template #prefix>
            <SearchOutlined />
          </template>

          <template #suffix>
            <a-tag class="mr-0">Enter</a-tag>
          </template>
        </a-input>

        <div class="grid gap-6 grid-cols-3">
          <div
            class="w-full h-56 rounded-xl"
            :class="[i % 2 == 1 ? 'bg-blue-400' : 'bg-cyan-400']"
            v-for="i in 30"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CategoryList from './components/CategoryList.vue'
import { SearchOutlined } from '@ant-design/icons-vue'

const value = ref('aaa')
</script>
