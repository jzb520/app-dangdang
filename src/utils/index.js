import {Swipe, SwipeItem} from 'vant'
export default {
    install(Vue){
        Vue.component(Swipe.name,Swipe);
        Vue.component(SwipeItem.name,SwipeItem);
    }
}