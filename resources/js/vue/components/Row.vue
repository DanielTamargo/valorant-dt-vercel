<script>
  import Cell from './Cell.vue'
  export default {
    props: {
      rowData: Object,
    },
    components: { Cell },
  }
</script>

<template>
  <div class="flex gap-2">
    <Cell v-for="cell in rowData.cells" :cellData="cell" />
  </div>
  <br />
</template>
