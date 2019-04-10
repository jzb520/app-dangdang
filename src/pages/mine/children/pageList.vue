<template>
<div class="pageList">
    <div class="wrapper">
        <ul class="list">
            <li class="list-item" v-for="item in mineList" :key="item.product_id">
                <div class="img">
                    <img :src="item.image_url" alt="">
                </div>
                <div class="title">
                    <p>{{item.name}}</p>
                    <div class="tag">
                        <div v-for="val in item.productTags" :key="val.label_type">
                            <span v-if="val.label_type==1001">{{val.name}}</span>
                            <span v-if="val.label_type==1008">{{val.name}}</span>
                            <span class="dir" v-if="val.label_type==3020">{{val.name}}</span>
                            <span class="dir" v-if="val.label_type==3102">{{val.name}}</span>
                            <span class="dir" v-if="val.label_type==1020">{{val.name}}</span>
                            <span v-if="val.label_type==1006">{{val.name}}</span>
                            <span class="dir" v-if="val.label_type==1007">{{val.name}}</span>
                            <span class="dir" v-if="val.label_type==3230">{{val.name}}</span>
                        </div>
                    </div>
                    <i class="price">￥{{item.price}}</i>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'page-list',
    computed:{
        ...mapState({
            mineList:state=>state.mine.mineList
        })
    },
    data(){
        return {
            pageList:[]
        }
    },
    created(){
        //请求数据
        this.$store.dispatch('mine/getMineListAction');
        console.log(this.mineList);
    }
}
</script>

<style lang="scss" scoped>
.pageList{
    width: 100%;
    margin-top: 8px;
    .wrapper{
        width: 100%;
        .list{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .list-item{
                width: 50%;
                padding: 10px;
                background: #fff;
                box-sizing: border-box;
                justify-content: space-around;
                &:nth-of-type(2n){
                    border-left: 2px solid #ccc;
                    border-bottom: 2px solid #ccc;
                    
                }
                &:nth-of-type(n){
                    border-bottom: 2px solid #ccc;
                    
                }
                .img{
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
                .title{
                    font-size: 12px;
                    color: #333;
                    margin-top: 5px;
                    p{
                        text-overflow: ellipsis;
                        display: -webkit-box; 
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden; 
                    }
                    .tag{
                        width: 100%;
                        div{
                            float: left;
                            span{
                                border: 1px solid #e53e30;
                                box-sizing: border-box;
                                color: #e53e30;
                                padding: 0 3px;
                                font-size: 10px;
                                border-radius: 3px;
                                line-height: 11px;
                            }
                            .dir {
                                background: #e53e30;
                                color: #fff;
                            }
                        }  
                    }
                }
                .price{
                    color: #e53e30;
                }
            }
        }
    }
}
</style>

