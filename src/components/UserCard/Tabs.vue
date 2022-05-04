<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="(item, i) in header"
        :key="i"
        class="tabs__tab"
        :class="(i === tabShow) ? 'tabs__tab--active' : ''"
        data-toggle="tab"
        :ref="item.ref"
        :data-link="item.link"
        @click="(i !== tabShow) ? tabShow = i : false"
      >
        <i :class="`fa fa-${item.icon} tabs__icon`" aria-hidden="true"></i>
        {{ item.title }}
      </li>
    </ul>

    <div class="tabs__body">
      <div
        v-for="(item, i) in data"
        :key="i"
        class="tabs__data"
        data-toggle="tabData"
        :ref="item.ref"
        :data-link="item.link"
        v-show="(i === tabShow)"
      >
        <ul class="fields">
          <li
            v-for="(field, j) in item.items"
            :key="j"
            class="fields__item"
          >
            <template v-if="field.type !== 'map'">
              <strong class="fields__label">{{ field.title }}:</strong> {{ field.value }}
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      header: {
        type: Array,
        required: true,
        default() {
          return []
        }
      },
      data: {
        type: Array,
        required: true,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        tabShow: 0
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/variables"
  @import "../../assets/sass/mixins"

  .tabs
    width: 100%

    &__header
      +ResetList
      display: flex
      justify-content: space-between
      width: 100%

    &__tab
      +Text(18px, 120%, $cDisabled)
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      flex: 1 0 auto
      padding: 10px 6px
      margin: 0
      border:
        width: 1px 1px 1px 1px
        style: solid
        color: $cDisabled
      border-bottom: 1px solid $cPrimary
      transition: color .3s, border-color .3s

      &:hover
        cursor: pointer
        color: $cBlack
        border-color: $cBlack
        transition: color .15s, border-color .15s

      &--active
        color: $cPrimary
        border:
          width: 1px 1px 0 1px
          color: $cPrimary

    &__icon
      font-size: 22px
      margin-bottom: 5px

    &__body
      width: 100%
      padding: $gGutter
      border:
        width: 0 1px 1px 1px
        style: solid
        color: $cPrimary

    .fields
      +ResetList
      width: 100%

      &__item
        +Text(14px, 120%, $cBlack)
        display: flex
        width: 100%

        &:not(:last-child)
          margin-bottom: $gGutter / 2

      &__label
        display: inline-flex
        width: 150px
</style>
