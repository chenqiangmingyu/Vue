<template>
    <div class="hello">
        <h1 @click="sayHello('hello message!')">{{ msg }}</h1>
        <p>View: {{ view }}</p>
        <p>Info: {{ info }}</p>
    </div>
</template>

<script>
import {sayHello} from '../vuex/actions/hello';

export default {
    vuex: {
        actions: {sayHello},
        getters: {
            view ({hello}) {
                return hello.view.accountId;
            }
        }
    },
    computed: {
        info () {
            return `${this.view || ''}xyz`;
        }
    },
    data () {
        return {
            msg: 'Hello World! I am tester chenqiang03'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color: #42b983;
}
</style>
