import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faStar,faPaperPlane, faStarHalf, faClipboard, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeart)
library.add(faStar)
library.add(faStarHalf)
library.add(faPaperPlane)
library.add(faClipboard)
library.add(faChevronRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)
