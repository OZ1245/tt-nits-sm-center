<template>
  <section class="home">
    <UserList />
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  import UserList from '@/components/UserList/UserList'

  export default {
    name: 'Home',
    components: {
      UserList
    },
    methods: {
      ...mapActions([
        'clearUUID'
      ])
    },
    created() {
      this.clearUUID()
    }
  }
</script>
