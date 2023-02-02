import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?latte' 
      },
      {
        title: '카푸치노',
        price: 4500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?cappuccino'
      }
    ],
    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: false,
      },
      {
        name: 'midium',
        price: 500,
        selected: false,
      },
      {
        name: 'large',
        price: 1000,
        selected: false,
      }
    ],
    optionList: [
      {
        type: '샷',
        price: 500,
        count: 0,
      },
      {
        type: '바닐라 시럽',
        price: 1000,
        count: 0,
      },
      {
        type: '카라멜 시럽',
        price: 1000,
        count: 0,
      },
    ],
  },
  getters: {
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      let totalPrice = 0
      for (const order of state.orderList) {
        totalPrice += (order.menu.price + order.size.price)
      }
      return totalPrice
    }
  },
  mutations: {
    UPDATE_MENU_STATUS(state, menuItem) {
      state.menuList = state.menuList.map((menu) => {
        if (menu === menuItem) {
          menu.selected = !menu.selected
        }
        return menu
      })
    },
    UPDATE_SIZE_STATUS(state, sizeItem) {
      state.sizeList = state.sizeList.map((size) => {
        if (size === sizeItem) {
          size.selected = !size.selected
        }
        return size
      })
    },
    INCREASE(state, optionItemplus) {
      state.optionList = state.optionList.map((plus) => {
        if (plus === optionItemplus) {
          optionItemplus.count++
        }
        return plus
      })
    },
    DECREASE(state, optionItemminus) {
      state.optionList = state.optionList.map((minus) => {
        if (minus === optionItemminus) {
          if (minus.count > 0) {
            optionItemminus.count--
          }
        }
        return minus
      })
    },
    // updateMenuStatus(state, selectedMenu) {
    //   const index = state.menuList.indexOf(selectedMenu)
    //   state.menuList[index].selected = true
    // },
    // updateSizeList(state, selectedSize) {
    //   const index = state.sizeList.indexOf(selectedSize)
    //   state.sizeList[index].selected = true
    // },
    // addOrder(state) {
    //   const selectedMenu = state.menuList.filter((menu) => {
    //     return menu.selected
    //   })[0]
    //   const selectedSize = state.sizeList.filter((size) => {
    //     return size.selected
    //   })[0]
    //   state.orderList.push({
    //     'menu': selectedMenu,
    //     'size': selectedSize,
    //   })
    // },
    // updateOptionList(state, newOption) {

    // },
  },
  actions: {
    updateMenuStatus(context, menuItem) {
      context.commit('UPDATE_MENU_STATUS', menuItem)
    },
    updateSizeStatus(context, sizeItem) {
      context.commit('UPDATE_SIZE_STATUS', sizeItem)
    },
    increase(context, optionItemplus) {
      context.commit('INCREASE', optionItemplus)
    },
    decrease(context, optionItemminus) {
      context.commit('DECREASE', optionItemminus)
    }
  },
  modules: {
  }
})
