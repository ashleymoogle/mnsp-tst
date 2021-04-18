<template>
  <div class="wrapper">
    <recipient v-for="reci in recipients" :key="reci.id" :data="reci" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Recipient from '@/components/Recipient.vue'
import { mapState } from 'vuex'
import { States } from '@/types/States'

export default defineComponent({
  name: 'Recipients',
  components: { Recipient },
  beforeRouteEnter (from, to, next) {
    next(async (vm) => {
      // This is dumb, we always need all data. Ideally we would have endpoint with relevant data to avoid call db everytime
      await vm.$store.dispatch('data/initData')
      vm.isLoading = false
    })
  },
  data () {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState<States>({
      recipients: ({ data }: States) => data.recipients
    })
  }
})
</script>

<style lang="scss" scoped>
  .wrapper {
    @apply grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6;
  }
</style>
