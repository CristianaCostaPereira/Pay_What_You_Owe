<template>
  <div>

    <div class="container">
      <h1>Nome Utilizador</h1>

      <form @submit.prevent>
        <div class="mb-3">
          <label class="form-label">Tipo de despesa:</label>

          <v-select
            label="description"
            :options="types"
            v-model="expense.type">
          </v-select>
        </div>

        <div class="mb-3">
          <label
            for="description"
            class="form-label">
            
            Descrição:</label>

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

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expense: {
        id: null,
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
  }
}
</script>