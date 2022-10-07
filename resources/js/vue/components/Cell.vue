<script>
  import { getRandomHexColor, randomColor } from '../functions/randoms'

  export default {
    props: {
      cellData: Object,
    },
    computed: {
      bgColor() {
        return {
          border: `1px solid ${randomColor()}`,
          'border-radius': '5px',
        }
      },
    },
  }
</script>

<template>
  <div
    class="grid place-content-center min-h-[80px] min-w-[80px] hover:bg-gray-100 hover:cursor-pointer active:bg-gray-200 select-none"
    :style="bgColor"
  >
    <p>{{ cellData.value }}</p>
  </div>
</template>
