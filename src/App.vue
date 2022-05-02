<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'

  export default {
    name: 'App',
    components: {
      Header,
    }
  }
</script>

<style lang="sass">
@import "assets/font-awesome/scss/font-awesome.scss"
@import "assets/sass/mixins"
@import "assets/sass/variables"

*
  box-sizing: border-box

html
  min-height: 100vh

body
  margin: 0

#app
  +Size(100%, 100%)
  display: flex
  flex-direction: column
  align-items: center

  section
    width: 100%
    max-width: 100%
    height: 100%

    @media screen and (min-width: map-get($gBreakpoints, sm))
      max-width: 600px

    @media screen and (min-width: map-get($gBreakpoints, md))
      max-width: 1024px

    @media screen and (min-width: map-get($gBreakpoints, lg))
      max-width: 1200px

    @media screen and (min-width: map-get($gBreakpoints, xl))
      max-width: 1540px
</style>
