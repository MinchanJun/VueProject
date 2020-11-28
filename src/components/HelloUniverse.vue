<template>
    <div class="hello-universe">
        <button :style="styleObject" @click="changeColour">{{ msg }}</button>
    </div>
</template>

<script>
import colourMixin from "@/mixins/colourMixin.js"

export default {
    name: "HelloUniverse",
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
.hello-universe {
    background-color: darkgrey;
}
</style>