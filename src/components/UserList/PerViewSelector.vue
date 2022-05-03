<template>
  <div class="perview">
    Количество элементов на странице:

    <select
      v-model="model"
      class="perview__selector"
      @change="changeHandler"
    >
      <option
        v-for="(option, i) in options"
        :key="i"
        :value="option"
        :selected="(option === model)"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PerViewSelector',
    data() {
      return {
        model: null,
        options: [ 10, 25, 50 ]
      }
    },
    computed: {
      ...mapGetters({
        perView: 'getPerView'
      })
    },
    methods: {
      ...mapActions([
        'setPerView'
      ]),
      changeHandler() {
        this.setPerView(this.model)
        this.$emit('select', this.model)
      }
    },
    mounted() {
      this.model = this.perView
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/variables"
  @import "../../assets/sass/mixins"

  .perview
    +Text()

    &__selector
      +Size(auto, 24px)
      background-color: $cWhite
      border: 1px solid $cGray
      border-radius: 0
      margin-left: 10px

      &:focus-visible
        outline: none
</style>
