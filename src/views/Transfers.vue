<template>
  <div class="wrapper">
    <transfer-item v-for="trans in transfers" :data="trans" :key="trans.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TransferItem from '@/components/TransferItem.vue'
import { States } from '@/types/States'
import { Transfer } from '@/store/types/Data'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'Transfers',
  components: { TransferItem },
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
      transfersStore: ({ data }: States) => data.transfers
    }),
    transfers (): Transfer[] {
      return [...this.transfersStore].reverse()
    }
  }
})
</script>

<style lang="scss" scoped>
  .wrapper {
    @apply grid grid-cols-1 sm:grid-cols-3 sm:gap-4
  }
</style>
