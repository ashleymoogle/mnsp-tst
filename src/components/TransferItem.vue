<template>
  <div class="transfer-single">
    <div class="transfer-infos">
      <div class="transfer-id">
        <div class="transfer-pic">
          <img :src="`https://placekitten.com/g/1${item.recipient.id}/100`" />
        </div>
        <div class="transfer-id-more">
          <div class="transfer-id-name">{{ item.recipient.firstname }}</div>
          <div class="transfer-id-amount">{{ amount }}</div>
        </div>
      </div>
      <div class="transfer-data">
        <div class="transfer-data-name">Received</div>
        <div class="transfer-data-date">{{ date }}</div>
      </div>
    </div>
    <div class="transfert-cta">
      Send again
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapGetters } from 'vuex'
import format from 'date-fns/format'
import { formatMoney } from '@/utils/Money'
import { Transfer } from '@/store/types/Data'
import { TransferDom } from '@/types/TransferDom'

export default defineComponent({
  name: 'TransferItem',
  props: {
    data: {
      type: Object as PropType<Transfer>
    }
  },
  computed: {
    ...mapGetters({
      recipient: 'data/getRecipientById'
    }),
    item (): TransferDom {
      const newData: Transfer = Object.assign({}, this.data)
      return {
        ...newData,
        recipient: this.recipient(newData.recipient)
      }
    },
    amount (): string {
      return formatMoney(this.item.amount, true)
    },
    date (): string {
      return format(new Date(this.item.date), 'MMM do yyyy')
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .transfer-single {
    @apply px-2 bg-gray-50 rounded-xl p-2 sm:px-5;
    .transfer-infos {
      @apply flex justify-between items-center;
      .transfer-id {
        @apply flex justify-center items-center;
        .transfer-pic {
          @apply mr-1;
          img {
            width: 72px;
            height: 72px;
            @apply rounded-full flex items-center justify-center;
          }
        }
        .transfer-id-name {
          font-family: 'nunito', sans-serif;
          @apply text-left;
        }
        .transfer-id-amount {
           font-family: 'spaceGrotesk', sans-serif;
           @apply text-xl font-bold;
        }
      }
      .transfer-data {
        @apply text-xs;
        .transfer-data-name {
          @apply text-right;
        }
        .transfer-data-date {
          @apply text-right;
        }
      }
    }
    .transfert-cta {
      @apply p-2 bg-green-400 rounded-lg text-white mt-2 sm:w-1/2 sm:m-auto cursor-pointer hover:bg-green-200 hover:text-black;
    }
  }
</style>
