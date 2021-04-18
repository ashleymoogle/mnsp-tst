<template>
  <div v-if="!isLoading" class="wrapper">
    <div class="wrapper-kpis">
      <h1 class="subtitle">My History</h1>
      <div class="kpis">
        <div class="kpi"><span>{{ nbTransfers }}</span> transfers</div>
        <div class="kpi"><span>{{ nbContacts }}</span> contacts</div>
        <div class="kpi"><span>{{ formatMoney(totalSent) }}</span> sent</div>
        <div class="kpi"><div class="rounded-full h-10 p-1 flex items-center justify-center border-2 border-black">{{ getFavCountry }}</div> favorite</div>
      </div>
      <h1 class="subtitle mt-6 sm:mt-8">Last transfert</h1>
      <div class="last-transfert sm:w-1/2 sm:m-auto">
        <transfer-item :data="getLastTransfer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { formatMoney } from '@/utils/Money'
import TransferItem from '@/components/TransferItem.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TransferItem
  },
  beforeRouteEnter (from, to, next) {
    next(async (vm) => {
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
    ...mapGetters({
      nbTransfers: 'data/getNbTransfers',
      nbContacts: 'data/getNbContacts',
      totalSent: 'data/getTotalSent',
      getFavCountry: 'data/getFavCountry',
      getLastTransfer: 'data/getLastTransfer'
    })
  },
  methods: {
    formatMoney (number: number) {
      return formatMoney(number)
    }
  }
})
</script>

<style lang="scss" scoped>
  .wrapper {
    .wrapper-kpis {
      .kpis {
        @apply px-2 grid grid-cols-2 gap-2 md:grid-cols-4 sm:px-4 sm:gap-4;
        .kpi {
          font-family: 'nunito', sans-serif;
          @apply bg-indigo-100 rounded-md flex flex-col justify-center items-center p-4 h-20;
          span {
            font-family: 'spaceGrotesk', sans-serif;
            @apply text-3xl font-bold;
          }
        }
      }
    }
  }
</style>
