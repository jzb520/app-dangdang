import {Swipe, SwipeItem , Icon} from 'vant'
export default {
    install(Vue){
        Vue.component(Swipe.name,Swipe);
        Vue.component(SwipeItem.name,SwipeItem);
        Vue.component(Icon.name, Icon);
    }
}