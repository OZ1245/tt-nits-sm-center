<template>
  <div class="user-list">
    <PerViewSelector
      class="user-list__perview"
      @select="perViewSelect"
    />
    <Table
      v-if="isLoaded"
      :data="users"
      class="user-list__table"
    />
    <Pagination
      class="user-list__pagination"
      @change="pageChange"
    />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import PerViewSelector from '@/components/UserList/PerViewSelector'
  import Table from '@/components/UserList/Table'
  import Pagination from '@/components/UserList/Pagination'

  export default {
    name: 'UserList',
    components: {
      PerViewSelector,
      Table,
      Pagination
    },
    computed: {
      ...mapGetters({
        isLoaded: 'isLoaded',
        users: 'getUsers',
        page: 'getPage'
      })
    },
    methods: {
      ...mapActions([
        'setUsers',
        'setLoadedStatus',
        'setPage'
      ]),
      perViewSelect() {
        if (this.page !== 1) {
          this.setPage(1)
        }

        this.setUsers()
      },
      pageChange() {
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
  @import "../../assets/sass/variables"

  .user-list
    padding: $gGutter 0

    &__perview,
    &__table,
    &__pagination
      margin-bottom: $gGutter
</style>
