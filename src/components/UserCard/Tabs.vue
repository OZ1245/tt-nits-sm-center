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
      >
        <i :class="`fa fa-${item.icon}`" aria-hidden="true"></i>
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
        <ul class="tabs__items">
          <li
            v-for="(field, j) in item.items"
            :key="j"
            class="tabs__item"
          >
            <template v-if="field.type !== 'map'">
              <strong>{{ field.title }}:</strong> {{ field.value }}
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
