import ax from 'axios'

export const axios = ax

export default {
    install (Vue, options) {
        Vue.prototype.$axios = ax
    }
}