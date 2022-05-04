<template>
  <div class="user-card">
    <div
      class="user-card__img-wrap"
      @click="showPicture = true"
    >
      <div class="user-card__img">
        <img :src="user.picture.medium" :alt="user.login.username">
      </div>
      <div class="user-card__icon">
        <i class="fa fa-search-plus" aria-hidden="true"></i>
      </div>
    </div>

    <VueEasyLightbox
      escDisabled
      moveDisabled
      :visible="showPicture"
      :imgs="user.picture.large"
      @hide="showPicture = false"
    />

    <h2 class="user-card__name">
      {{ user.name.first }} {{ user.name.last }}
    </h2>

    <Tabs :header="tabs.header" :data="tabs.data" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import VueEasyLightbox from 'vue-easy-lightbox'
  import Tabs from '@/components/UserCard/Tabs'

  export default {
    name: 'UserCard',
    components: {
      Tabs,
      VueEasyLightbox
    },
    data() {
      return {
        showPicture: false
      }
    },
    computed: {
      ...mapGetters({
        user: 'getUser'
      }),
      tabs() {
        return {
          header: [
            {
              title: 'Personal Information',
              ref: 'personalTab',
              link: 'personalTabData',
              icon: 'user'
            },
            {
              title: 'Contacts',
              ref: 'contactsTab',
              link: 'contactsTabData',
              icon: 'mobile'
            },
            {
              title: 'Location',
              ref: 'locationTab',
              link: 'locationTabData',
              icon: 'map-marker'
            },
            {
              title: 'Account Information',
              ref: 'accountTab',
              link: 'accountTabData',
              icon: 'info-circle'
            },
          ],
          data: [
            {
              ref: 'personalTabData',
              link: 'personalTab',
              items: [
                {
                  title: 'Full name',
                  value: `${this.user.name.title} ${this.user.name.first} ${this.user.name.last}`
                },
                {
                  title: 'Gender',
                  value: this.user.gender
                },
                {
                  title: 'Date of born',
                  value: `${this.$moment(this.user.dob.date).format('MM/DD/YYYY')}, age ${this.user.dob.age}`
                },
                {
                  title: 'Nationality',
                  value: this.user.nat
                }
              ]
            },
            {
              ref: 'contactsTabData',
              link: 'contactsTab',
              items: [
                {
                  title: 'Email',
                  value: this.user.email
                },
                {
                  title: 'Phone',
                  value: `${this.user.phone}, ${this.user.call}`
                }
              ]
            },
            {
              ref: 'locationTabData',
              link: 'locationTab',
              items: [
                {
                  title: 'Address',
                  value: `${this.user.location.postcode}, ${this.user.location.street.name}, ${this.user.location.street.number} ${this.user.location.city}, ${this.user.location.country}`
                },
                // {
                //   title: 'Show map',
                //   type: 'map',
                //   value: {
                //     latitude: this.user.location.latitude,
                //     longitude: this.user.location.longitude
                //   }
                // }
              ]
            },
            {
              ref: 'accountTabData',
              link: 'accountTab',
              items: [
                {
                  title: 'Username',
                  value: this.user.login.username
                },
                {
                  title: 'Registered date',
                  value: this.$moment(this.user.redistered).format('MM/DD/YYYY')
                },
                {
                  title: 'Id',
                  value: `${this.user.id.name}, ${this.user.id.value}`
                }
              ]
            }
          ]
        }
      }
    },
    mounted() {
      console.log('--- mounted hook ---')
      console.log('this.user:', this.user)
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/variables"
  @import "../../assets/sass/mixins"

  .user-card
    display: flex
    flex-direction: column
    align-items: center
    padding: $gGutter 0

    &__img-wrap
      +Size(100px)
      position: relative
      border-radius: 50%
      overflow: hidden
      margin-bottom: $gGutter

      &:hover
        cursor: pointer

        .user-card__icon
          bottom: 0
          transition: bottom .15s

    &__img
      +Size(100%)

      img
        +Size(100%)
        object-fit: cover

    &__icon
      width: 100%
      display: flex
      justify-content: center
      position: absolute
      left: 0
      bottom: -100%
      background-color: rgba($cGray, 50%)
      font-size: 18px
      color: $cWhite
      padding: 5px
      transition: bottom .3s

    &__name
      +Text(24px)
      margin: 0 0 $gGutter
</style>
