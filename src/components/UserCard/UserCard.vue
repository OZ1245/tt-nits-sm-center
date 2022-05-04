<template>
  <div class="user-card">
    <div class="user-card__img-wrap">
      <div class="user-card__img">
        <img :src="user.picture.medium" :alt="user.login.username">
      </div>
      <button
        class="user-card__zoom"
        @click="showPicture"
      >
        <i class="fa fa-search-plus" aria-hidden="true"></i>
      </button>
    </div>

    <h2 class="user-card__name">
      {{ user.name.first }} {{ user.name.last }}
    </h2>

    <Tabs :header="tabs.header" :data="tabs.data" />
    <!-- TODO -->
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Tabs from '@/components/UserCard/Tabs'

  export default {
    name: 'UserCard',
    components: {
      Tabs
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
      },
      methods: {
        showPicture() {

        }
      }
    },
    mounted() {
      console.log('--- mounted hook ---')
      console.log('this.user:', this.user)
    }
  }
</script>
