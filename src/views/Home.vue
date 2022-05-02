<template>
  <section class="home">
    <UserList />
  </section>
</template>

<script>
import UserList from '@/components/UserList'

export default {
  name: 'Home',
  components: {
    UserList
  }
}
</script>
