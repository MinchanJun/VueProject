<template>
    <div class="hello-world">
        <button :style="styleObject" @click="changeColour">{{ msg }}</button>
    </div>
</template>

<script>
import colourMixin from "@/mixins/colourMixin.js"

export default {
    name: "HelloWorld",
    mixins: [colourMixin],
    props: {
        msg: String
    },
    data() {
        return {
            styleObject: {
                color: "black"
            }
        };
    },
    methods: {
        changeColour() {
            this.randomColour(this)
        }
    }
}
</script>

<style>
.hello-world {
    background-color: burlywood;
}
</style>