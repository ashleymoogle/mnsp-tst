<template>
  <div class="recipient-single">
    <div class="reci-pic">
      <img :src="`https://placekitten.com/g/1${data.id}/100`" alt="profile" />
    </div>
    <div class="reci-name">
      {{ data.firstname }}
    </div>
    <div class="reci-nb">
      {{ nbOfTransfers }} transfers
    </div>
    <div class="reci-cta">
      Send {{formatMoney}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapGetters } from 'vuex'
import { formatMoney } from '@/utils/Money'
import { Recipient } from '@/store/types/Data'

export default defineComponent({
  name: 'TransferItem',
  props: {
    data: {
      type: Object as PropType<Recipient>
    }
  },
  computed: {
    ...mapGetters({
      recipient: 'data/getRecipientById',
      transfers: 'data/nbOfTransfersPerRecipient'
    }),
    nbOfTransfers (): string {
      return this.transfers(this.data.id)
    },
    formatMoney () {
      return formatMoney(42, true)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .recipient-single {
    @apply px-2 bg-gray-50 rounded-xl p-2 sm:p-5;
    .reci-pic {
      img {
        width: 120px;
        height: 120px;
        @apply rounded-full flex items-center justify-center m-auto;
      }
    }
    .reci-name {
      @apply mt-2 text-xl;
    }
    .reci-cta {
      @apply p-2 bg-green-400 rounded-lg text-white mt-2 sm:w-1/2 sm:m-auto cursor-pointer hover:bg-green-200 hover:text-black;
    }
  }
</style>
