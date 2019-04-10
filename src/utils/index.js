import {Swipe, SwipeItem , Icon} from 'vant'
import Header from '../components/Header'
import Iscroll from '../components/Iscroll'
export default {
    install(Vue){
        Vue.component(Swipe.name,Swipe);
        Vue.component(SwipeItem.name,SwipeItem);
        Vue.component(Icon.name, Icon);
        Vue.component(Header.name,Header);
        Vue.component(Iscroll.name,Iscroll)
    }
}