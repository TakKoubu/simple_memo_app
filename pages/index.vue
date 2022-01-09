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
      memos: [],
      newItem: ''
    }
  },
  methods: {
    add() {
      this.$store.commit('memos/add', this.newItem)
      this.newItem = ''
    }
  },
}

</script>
