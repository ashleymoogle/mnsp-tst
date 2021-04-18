import { Store } from '@/store'

declare module '@vue/runtime-core' {
  interface ComponentPublicInstance {
    $store: Store,
    isLoading: boolean
  }
  interface ComponentCustomProperties {
    $store: Store,
    isLoading: boolean
  }
}
