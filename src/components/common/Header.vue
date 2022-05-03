<template>
  <header class="header">
    <RouterLink
      v-if="$route.name !== 'Home'"
      to="/"
    >
      <i class="fa fa-arrow-left header__icon-back" aria-hidden="true"></i>
    </RouterLink>
    <h1 class="header__title">
      {{ title }}
    </h1>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
      title() {
        if (this.$route.name !== 'Home') {
          // TODO
          // return `${this.$route.meta.title}: ${(this.$route.params.username) ? this.$route.params.username : ''}`
          return this.$route.meta.title
        } else {
          return this.$route.meta.title
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/mixins"
  @import "../../assets/sass/variables"

  .header
    +Size(100%, auto)
    display: flex
    align-items: center
    padding: $gGutter
    background-color: $cPrimary

    &__icon-back
      font-size: 24px
      color: $cWhite
      margin-right: 20px

    &__title
      +Text(24px, 120%, $cWhite)
      margin: 0
</style>
