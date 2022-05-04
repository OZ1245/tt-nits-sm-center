<template>
  <div class="user-table">
    <table class="user-table__table">
      <thead ref="userTableHeader">
        <tr>
          <th
            v-for="(item, i) in cells"
            :key="i"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, i) in data"
          :key="i"
          @click="getUser(user.login.uuid)"
        >
          <td>{{ `${user.name.first} ${user.name.last}` }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.dob.age }}</td>
          <td>{{ user.nat }}</td>
          <td>{{ user.registered.date | moment('MM/DD/YYYY') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Table',
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        cells: [
          'Name',
          'Email',
          'Phone',
          'Age',
          'NAT',
          'Registered'
        ]
      }
    },
    computed: {
      ...mapGetters({
        user: 'getUser'
      })
    },
    methods: {
      ...mapActions([
        'setUUID',
      ]),
      getUser(uuid) {
        console.log('--- getUser method ---')
        console.log('uuid:', uuid)
        this.setUUID(uuid)
        this.$router.push({ name: 'User', params: { username: this.user.login.username } })
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/variables"
  @import "../../assets/sass/mixins"

  .user-table
    +Size(100%, auto)

    &__table
      +Size(100%, auto)
      border-collapse: collapse
      border: 1px solid $cPrimary

      thead
        th
          +Text(18px, 120%, $cWhite)
          background-color: $cPrimary
          padding: 5px
          border-width: 0 1px 0 1px
          border-style: solid
          border-color: $cWhite

          &:first-child
            border-width: 0 1px 0 0

          &:last-child
            border-width: 0 0 0 1px

      tbody
        td
          +Text(14px, 120%, $cBlack)
          padding: 5px 3px
          border-width: 0 1px 1px 1px
          border-style: solid
          border-color: $cPrimary
          transition: background-color .3s

          &:first-child
            border-width: 0 1px 1px 0

          &:last-child
            border-width: 0 0 1px 1px

        tr
          &:last-child
            td
              border-bottom: 0

          &:hover
            td
              background-color: $cGreenLight
              cursor: pointer
              transition: background-color .15s
</style>
