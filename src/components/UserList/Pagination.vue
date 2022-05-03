<template>
  <div class="pagination">
    <ul class="pagination__wrap">
      <li class="pagination__item">
        <button
          class="pagination__button pagination__button--first"
          :disabled="model === 1"
          @click="firstPage"
        >
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
      </li>
      <li class="pagination__item">
        <button
          class="pagination__button pagination__button--prev"
          :disabled="model === 1"
          @click="prevPage"
        >
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </li>
      <li class="pagination__item">
        <span class="pagination__active">
          {{ model }}
        </span>
      </li>
      <li class="pagination__item">
        <button
          class="pagination__button pagination__button--next"
          :disabled="model === pages"
          @click="nextPage"
        >
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </li>
      <li class="pagination__item">
        <button
          class="pagination__button pagination__button--last"
          :disabled="model === pages"
          @click="lastPage"
        >
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Pagination',
    data() {
      return {
        model: null,
        pages: 20
      }
    },
    computed: {
      ...mapGetters({
        page: 'getPage'
      })
    },
    methods: {
      ...mapActions([
        'setPage'
      ]),
      changePage() {
        this.setPage(this.model)
        this.$emit('change', this.model)
      },
      firstPage() {
        if (this.page > 1) {
          this.model = 1
          this.changePage()
        }
      },
      prevPage() {
        if (this.page > 1) {
          this.model--
          this.changePage()
        }
      },
      nextPage() {
        if (this.page < this.pages) {
          this.model++
          this.changePage()
        }
      },
      lastPage() {
        if (this.page < this.pages) {
          this.model = this.pages
          this.changePage()
        }
      },
    },
    watch: {
      page(value) {
        this.model = value
      }
    },
    mounted() {
      this.model = this.page
    },
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/variables"
  @import "../../assets/sass/mixins"

  .pagination
    display: flex
    justify-content: center

    &__wrap
      display: flex
      align-items: center
      padding: 0
      margin: 0

    &__item
      display: inline-flex
      margin: 0 10px

      &:first-child
        margin-left: 0

      &:last-child
        margin-right: 0

    &__button
      +Size(28px)
      +Text(18px, 120%)
      display: flex
      justify-content: center
      align-items: center
      transition: background-color .3s, border-color .3s, color .3s

      &:not(:disabled)
        color: $cWhite
        background-color: $cPrimary
        border: 1px solid $cPrimary

      &:disabled
        color: $cGray
        background-color: $cWhite
        border: 1px solid $cGray

      &:hover:not(:disabled)
        color: $cRed
        background-color: $cWhite
        border-color: $cRed
        cursor: pointer
        transition: background-color .15s, border-color .15s, color .15s

    &__active
      +Text(14px, 120%, $cBlack)
</style>
