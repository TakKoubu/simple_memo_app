<template>
  <section class="container">
    <div class="form">
      <form @submit.prevent="add">
        <input v-model="newItem">
        <button>Add</button>
      </form>
    </div>
    <ul v-for="memo in memos" :key="memo.id">
      <li>{{ memo }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      newItem: ''
    }
  },
  methods: {
    add() {
      this.$store.commit('memos/add', this.newItem)
      this.newItem = ''
    }
  },
  computed: {
    memos() {
      // return this.$store.state.todos.todos
      return this.$store.getters['memos/writtenmemos']
    }
  },
}

</script>
