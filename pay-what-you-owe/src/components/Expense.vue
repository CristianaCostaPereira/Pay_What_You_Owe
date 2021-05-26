<template>
  <div>
    <div class="container">
      <h1 class="mb-3">Paga o que Deves</h1>

      <form @submit.prevent>
        <div class="mb-5">
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
                v-model.number="expense.value">

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
            class="btn btn-primary mb-5">

            Adicionar Despesa
          </button>
        </div>
      </form>

      <div class="mt-3 mb-3"
        v-for="expense in expenses"
        :key="expense.id">

        {{ expense.name }}: {{ expense.type + ' com valor pendente de '}} {{ expense.value + '€'}}
      </div>

      <div class="mb-3">
            <label
              for="total"
              class="form-label">

              Total: {{ totalDepts }}
            </label>

            <div class="input-group mb-3">
              <input
                id="total"
                type="number"
                class="form-control">
            </div>
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
          description: 'Luz',
          totalExpense: 0
        },

        {
          id: 2,
          description: 'Água',
          totalExpense: 0
        },

        {
          id: 3,
          description: 'Gás',
          totalExpense: 0
        },

        {
          id: 4,
          description: 'Renda',
          totalExpense: 0
        },

        {
          id: 5,
          description: 'Outro',
          totalExpense: 0
        }
      ]
    }
  },

  computed: {
    totalDepts () {
      let a = this.types.map(a => a.totalExpense);
      let sumExpenses = 0
      for(let i = 0; i< a.length; i++) {
        sumExpenses += a[i]
      }
      return sumExpenses
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

      for (let i = 0; i < this.types.length; i++) {
        if (this.types[i].id === this.expense.type.id) {
          this.types[i].totalExpense += this.expense.value
        }
      }

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