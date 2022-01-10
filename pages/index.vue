<template>
  <section class="container">
    <div class="form">
      <form @submit.prevent="add">
        <input v-model="newItem">
        <button>Add</button>
      </form>
    </div>
    <ul v-for="(memo, index) in memos" :key="index">
      <li>{{ memo }}</li>
      <button @click="remove(index)">remove</button>
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
    },
    remove(index){
      this.$store.commit('memos/remove',index)
    }
  },
  computed: {
    memos() {
      return this.$store.getters['memos/writtenmemos']
    }
  },
}

</script>
