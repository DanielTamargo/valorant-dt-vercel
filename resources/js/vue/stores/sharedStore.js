import { defineStore } from 'pinia'
import { ROW_TYPE_A, ROW_TYPE_B } from '../constants/rowTypes'

export const useSharedStore = defineStore('shared', {
  // Initial state
  state: () => {
    return {
      appName: 'Learning Inertia + Vue',
      rows: [
        {
          type: ROW_TYPE_A,
          cells: [
            { value: 10, month: 1, year: 2022 },
            { value: 0, month: 4, year: 2022 },
            { value: 5, month: 6, year: 2022 },
            { value: 100, month: 7, year: 2022 },
          ],
        },
        {
          type: ROW_TYPE_B,
          cells: [
            { value: 20, month: 2, year: 2022 },
            { value: 0, month: 4, year: 2022 },
            { value: 5, month: 6, year: 2022 },
            { value: 100, month: 7, year: 2022 },
          ],
        },
        {
          type: ROW_TYPE_A,
          cells: [
            { value: 20, month: 1, year: 2022 },
            { value: 30, month: 3, year: 2022 },
            { value: 50, month: 6, year: 2022 },
            { value: 0, month: 7, year: 2022 },
          ],
        },
      ],
    }
  },

  actions: {
    addRow(row) {
      this.rows.push(row)
    },

    updateCellValue(rowIndex, cellIndex, value) {
      this.rows[rowIndex].cells[cellIndex].value = value
    },
  },

  getters: {},
})
