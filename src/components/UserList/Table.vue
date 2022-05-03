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
          v-for="(item, i) in data"
          :key="i"
          @click="$router.push({ name: 'User', params: { uuid: item.login.uuid } })"
        >
          <td>{{ `${item.name.first} ${item.name.last}` }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.dob.age }}</td>
          <td>{{ item.nat }}</td>
          <td>{{ item.registered.date | moment('MM/DD/YYYY') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
