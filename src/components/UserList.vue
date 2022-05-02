<template>
  <div class="user-list">
    <PerViewSelector
      class="user-list__perview"
      @select="perViewSelect"
    />
    <pre v-if="isLoaded">
      {{ users }}
    </pre>
    <!-- <Pagination /> -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import PerViewSelector from '@/components/PerViewSelector'

  export default {
    name: 'UserList',
    components: {
      PerViewSelector
    },
    computed: {
      ...mapGetters({
        isLoaded: 'isLoaded',
        users: 'getUsers',
        perView: 'getPerView',
        page: 'getPage'
      })
    },
    methods: {
      ...mapActions([
        'setUsers',
        'setLoadedStatus'
      ]),
      perViewSelect(count) {
        console.log('--- perViewSelect method ---')
        console.log('count:', count)
        this.setUsers()
      }
    },
    async created() {
      await this.setUsers()
      this.setLoadedStatus(true)
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"

  .user-list
    padding: $gGutter 0

    &__perview
      margin-bottom: $gGutter
</style>
