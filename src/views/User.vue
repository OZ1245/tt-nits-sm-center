<template>
  <section class="user">
    <UserCard />
  </section>
</template>

<script>
  import UserCard from '@/components/UserCard/UserCard'

  export default {
    name: 'User',
    components: {
      UserCard
    }
  }
</script>
