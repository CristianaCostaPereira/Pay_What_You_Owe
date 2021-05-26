<template>
  <div>
    <div class="container">

      <form @submit.prevent>
        <div class="mb-3">
          <h3>Proveitos</h3>

          <label class="form-label">Tipo de proveito:</label>

          <v-select
            label="description"
            :options="types"
            v-model="income.type">
          </v-select>
        </div>

        <div v-if="income.type">
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
              v-model="income.description">
          </div>

          <div class="mb-3">
            <label
              for="value"
              class="form-label">

              Valor adicionado:
            </label>

            <div class="input-group mb-3">
              <input
                id="value"
                type="number"
                class="form-control"
                placeholder="Valor"
                v-model="income.value">

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
                v-model="income.date">
            </div>
          </div>

          <button
            @click="addIncome()"
            type="submit"
            class="btn btn-primary">

            Adicionar proveito
          </button>
        </div>
      </form>

      <div class="mt-3"
        v-for="income in incomes"
        :key="income.id">

        {{ income.type }}: {{ income.value + '€'}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      income: {
        type: null,
        description: '',
        value: '',
        date: ''
      },

      incomes: [],

      types: [
        {
          id: 1,
          description: 'Salário'
        },

        {
          id: 2,
          description: 'Prémio'
        },

        {
          id: 3,
          description: 'Presentes'
        },

        {
          id: 4,
          description: 'Outro'
        }
      ]
    }
  },

  methods: {
    addIncome () {
      let newIncome = {
        id: this.income.length + 1,
        type: this.income.type.description,
        description: this.income.description,
        value: this.income.value,
        date: this.income.date
      }

      this.incomes.push(newIncome)

      this.clearIncomeForm()
    },

    clearIncomeForm () {
      this.income = {
        type: null,
        description: '',
        value: '',
        date: ''
      }
    }
  }
}
</script>