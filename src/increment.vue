<template>
    <div>
        <div>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
        </div>
        <div>
            <input type="text" v-model="incrementValue">
            <button @click="incrementWithValue">increment</button>
        </div>
        <!-- 展示信息 -->
        <div v-if ="show">
            waiting 
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        data() {
            return {
                incrementValue: 0
            }
        },
        computed: {
            show: function() {
                return this.$store.state.waiting;
            },
            countAnother: function () { // 获取getters
                return this.$store.getters.countAnother;
            }
        },
        methods: {
            ...mapActions(["increment","decrement"]),
            incrementWithValue() {
　　　　　　　　　　// dispatch 只能接受一个参数，需要传对象参数
                this.$store.dispatch("incrementWithValue", { value:this.incrementValue, anotherValue: this.countAnother})
            }
        }
    }
</script>