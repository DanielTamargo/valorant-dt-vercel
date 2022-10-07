<script setup>
  import { storeToRefs } from 'pinia'
  import { useSharedStore } from '../stores/sharedStore'
  import Row from '../components/Row.vue'

  const store = useSharedStore()
  const rows = store.rows

  defineProps({
    components: { Row },
  })

  const updateValue = () => {
    const rowIndex = document.querySelector('input[name="rowIndex"]').value
    const cellIndex = document.querySelector('input[name="cellIndex"]').value
    const value = document.querySelector('input[name="value"]').value

    store.updateCellValue(rowIndex, cellIndex, value)
  }

  const randomUpdates = () => {
    setInterval(() => {
      const rowIndex = 0
      const cellIndex = Math.floor(Math.random() * 4)
      const value = Math.floor(Math.random() * 100)

      store.updateCellValue(rowIndex, cellIndex, value)
    }, 1000)
  }

  randomUpdates()
</script>

<template>
  <main class="min-h-screen grid place-content-center p-5">
    <h1 class="text-3xl mx-auto mb-4 select-none">{{ store.appName }}</h1>
    <Row v-for="row in rows" :rowData="row" />

    <div class="flex gap-2 justify-center items-center p-1 mb-1">
      <label for="rowIndex" class="min-w-[80px] text-end">Row index</label>
      <input name="rowIndex" inputmode="numeric" pattern="[0-9]*" class="border-2 flex-grow p-2" value="0" />
    </div>
    <div class="flex gap-2 justify-center items-center p-1 mb-1">
      <label for="cellIndex" class="min-w-[80px] text-end">Cell index</label>
      <input name="cellIndex" inputmode="numeric" pattern="[0-9]*" class="border-2 flex-grow p-2" value="0" />
    </div>
    <div class="flex gap-2 justify-center items-center p-1 mb-2">
      <label for="value" class="min-w-[80px] text-end">Value</label>
      <input name="value" inputmode="numeric" pattern="[0-9]*" class="border-2 flex-grow p-2" value="0" />
    </div>
    <div class="flex gap-2 justify-center items-center p-2">
      <button
        @click.preventDefault="updateValue"
        class="p-2 rounded-md min-w-[80px] bg-gray-200 border-gray-200 hover:bg-gray-300 active:bg-gray-500"
      >
        Apply
      </button>
    </div>
  </main>
</template>
