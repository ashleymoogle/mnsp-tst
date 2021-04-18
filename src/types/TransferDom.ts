import { Recipient, Transfer } from '@/store/types/Data'

type TransTemp = Omit<Transfer, 'recipient'>;

interface TransferDom extends TransTemp {
  recipient: Recipient;
}

export { TransferDom }
