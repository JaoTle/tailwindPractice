import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles/tailwind.css"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse ,faEllipsis, faUserTag, faClapperboard, faMapLocationDot, faClone, faFilm, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faCirclePlay, faComment, faCompass , faFaceSmile, faHeart, faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faBuromobelexperte, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faHouse,faFacebookMessenger,faSquarePlus,faCompass,faHeart,faEllipsis,faBuromobelexperte,
    faMapLocationDot,faClapperboard,faCirclePlay,faUserTag,faClone,faFilm,faCircleChevronRight,faComment,
    faPaperPlane,faBookmark,faFaceSmile)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
