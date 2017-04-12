import * as types from '../mutation-types'

export const state = {
  query: {
    destination: '', // 目的地
    enter: '', // 入驻日期
    openhouse: '', // 开房日期
    checkout: '', // 退房日期
    pricerange: [0, 100] // 价格区间
  },
  num: 0
}

export const getters = {
  getHotel: state => state.data
}

export const actions = {
  getMainAlbums ({commit}, {limit = 6}) {
  }
}

export const mutations = {
  [types.SET_HOTEL_QUERY] (state, {query}) {
    state.query = query
  }
}
