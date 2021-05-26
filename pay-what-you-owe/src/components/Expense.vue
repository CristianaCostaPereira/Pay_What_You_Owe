<template>
  <div>
    <div class="container">
      <h1 class="mb-3">Paga o que Deves</h1>

      <form @submit.prevent>
        <div class="mb-3">
          <label
            for="name"
            class="form-label">

            Nome:
          </label>

          <div class="input-group mb-3">
            <input
              id="name"
              type="text"
              class="form-control"
              v-model="expense.name">
          </div>
        </div>

        <div class="mb-3">
          <h3>Despesas</h3>

          <label class="form-label">Tipo de despesa:</label>

          <v-select
            label="description"
            :options="types"
            v-model="expense.type"
            value="expense">
          </v-select>
        </div>

        <div v-if="expense.type">
          <div class="mb-3">
            <label
              for="description"
              class="form-label">

              Descrição:
            </label>

            <input
              id="description"
              type="text"
              class="form-control"
              placeholder="Descrição"
              v-model="expense.description">
          </div>

          <div class="mb-3">
            <label
              for="value"
              class="form-label">

              Valor em dívida:
            </label>

            <div class="input-group mb-3">
              <input
                id="value"
                type="number"
                class="form-control"
                placeholder="Valor"
                v-model="expense.value">

              <span class="input-group-text">€</span>
            </div>
          </div>

          <div class="mb-3">
            <label
              for="date"
              class="form-label">

              Data:
            </label>

            <div class="input-group mb-3">
              <input
                id="date"
                type="date"
                class="form-control"
                v-model="expense.date">
            </div>
          </div>

          <button
            @click="addExpensive()"
            type="submit"
            class="btn btn-primary">

            Adicionar Despesa
          </button>
        </div>
      </form>

      <div class="mt-3"
        v-for="expense in expenses"
        :key="expense.id">

        {{ expense.name }}: {{ expense.type + ' com valor pendente de '}} {{ expense.value + '€'}}
      </div>

      <Income />
    </div>
  </div>
</template>

<script>
import Income from '@/components/Income.vue'

export default {
  components: {
    Income
  },

  data () {
    return {
      expense: {
        name: '',
        type: null,
        description: '',
        value: '',
        date: ''
      },

      expenses: [],

      types: [
        {
          id: 1,
          description: 'Luz'
        },

        {
          id: 2,
          description: 'Água'
        },

        {
          id: 3,
          description: 'Gás'
        },

        {
          id: 4,
          description: 'Renda'
        },

        {
          id: 5,
          description: 'Outro'
        }
      ]
    }
  },

  methods: {
    addExpensive() {
      let newExpense = {
        id: this.expenses.length + 1,
        name: this.expense.name,
        type: this.expense.type.description,
        description: this.expense.description,
        value: this.expense.value,
        date: this.expense.date
      }

      this.expenses.push(newExpense)

      this.clearForm()
    },

    clearForm() {
      this.expense = {
        type: null,
        description: '',
        value: '',
        date: ''
      }
    }
  }
}
</script>