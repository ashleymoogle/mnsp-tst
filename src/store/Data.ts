import { StateData, Transfer } from '@/store/types/Data'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

const state: StateData = {
  transfers: [],
  recipients: []
}

const getters: GetterTree<StateData, any> = {
  getNbTransfers: (state) => {
    return state.transfers.length
  },
  getNbContacts: (state) => {
    return state.recipients.length
  },
  getTotalSent: (state) => {
    return state.transfers.reduce((acc: number, item: Transfer) => {
      acc = acc + item.amount
      return acc
    }, 0)
  },
  getFavCountry: (state) => {
    let compare = ''
    let mostUsed = ''
    state.transfers.map(({ country }) => country).reduce((acc: any, item: string) => {
      if (item in acc) {
        acc[item]++
      } else {
        acc[item] = 1
      }
      if (acc[item] > compare) {
        compare = acc[item]
        mostUsed = item
      }
      return acc
    }, {})
    return mostUsed
  },
  getLastTransfer: (state) => {
    const dates = state.transfers.sort((a: Transfer, b: Transfer) => {
      return Date.parse(b.date) - Date.parse(a.date)
    })
    console.log(dates)
    return dates[0]
  },
  getRecipientById: (state) => (id: number) => {
    return state.recipients.find(item => item.id === id)
  },
  nbOfTransfersPerRecipient: (state) => (id: number) => {
    return state.transfers.reduce((acc: number, item: Transfer) => {
      if (item.recipient === id) {
        console.log('pass', id)
        acc++
      }
      return acc
    }, 0)
  }
}

const mutations: MutationTree<StateData> = {
  setData (state, data) {
    state = Object.assign(state, data)
  },
  setTransfers (state, data) {
    state.transfers = data
  },
  setRecipients (state, data) {
    state.recipients = data
  }
}

const actions: ActionTree<StateData, any> = {
  async initData ({ commit }) {
    const res = await fetch('https://my-json-server.typicode.com/Monisnap/test-front-back/db')
    const data = await res.json()
    commit('setData', data)
  },
  async getTransfers ({ commit }) {
    const res = await fetch('https://my-json-server.typicode.com/Monisnap/test-front-back/transfers')
    const data = await res.json()
    commit('setTransfers', data)
  },
  async getRecipients ({ commit }) {
    const res = await fetch('https://my-json-server.typicode.com/Monisnap/test-front-back/recipients')
    const data = await res.json()
    commit('setRecipients', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
