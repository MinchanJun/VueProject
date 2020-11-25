<template>
    
    <div>
        <p v-if="loginStatus">You are logged in <button @click="handleLogin">Logout</button></p>
        <p v-else>Click to Login <button @click="handleLogin">Login</button></p>

        <div v-show="loginStatus">
            <ul>
                <li v-for="(list, index) in studyLists" :key="index">{{ list }}</li>
            </ul>
        </div>

        <div v-if="custom">
            <h2>Custom Directives</h2>
            <div class="box" v-flee></div>
        </div>

    </div>

</template>

<script>
import Vue from 'vue';

Vue.directive('flee', {
    inserted: function (el) {
        let count = 1;
        let moveDistance = '150px';
        el.innerText = 'Catch Me';
        el.addEventListener('mouseover', () => {
            count++;
            el.style.position = 'relative';
            if (el.style.left === moveDistance) {
                el.style.left = '0px';
            } else {
                el.style.left = moveDistance;
            }
            if (count > 2) {
                el.innerText = 'STILL CANT CATCH ME??'
            }
        })
    }
})

export default {
    name: 'CustomDirective',
    data() {
        return {
            loginStatus: false,
            studyLists: ['Vue', 'Testing', 'SVN'],
            custom: true
        }
    },
    methods: {
        handleLogin(e) {
            console.log(e)
            this.loginStatus = this.loginStatus ? false : true;    
        }
    }
}
</script>

<style>
.box {
    width: 100px;
    height: 100px;
    background-color: aqua;       
}

</style>