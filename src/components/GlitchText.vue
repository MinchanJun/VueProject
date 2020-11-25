<template>
    <span>{{ currentText }} TimetoExecute:{{ currentSpeed }}</span> 
</template>



<script>

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export default {
    name: "GlitchText",
    props: {
        text: {
            type: String,
            required: true
        },
        speed: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            currentText: "",
            defaultSpeed: 300, 
            currentSpeed: 0,
            glitchRange: 'abcdefghijklmnopqrstuvwxyz',
            finalText: ""
        };
    },
    watch: {
        text: function(val, oldVal) {
            this.currentText = "";
            console.log('val: ', val);
            console.log('oldVal: ', oldVal);
            this.displayText(val, "");
        }
    },
    created() {
        this.currentSpeed = this.speed;
        // if (this.speed) {
        //     this.currentSpeed = this.speed;
        // } else {
        //     this.currentSpeed = this.defaultSpeed;
        // }
    },
    mounted() {
        this.finalText = this.text;
        this.displayText(this.text, "");
    },
    updated() {

    },
    methods: {
        displayText(text, target) {
            let self = this;
            if (text.length > target.length + 1) {
                setTimeout(() => {
                    let newCurrent = target + text[target.length];
                    newCurrent += self.glitchChar(self.glitchRange);
                    target += text[target.length];
                    self.currentText = newCurrent;
                    self.displayText(text, target);
                }, self.currentSpeed);

            } else {
                self.currentText = text;
            }
            // console.log(target);
            // this.currentText = text;
        },
        glitchChar(characters) {
            let char = characters[getRandomInt(characters.length -1)];
            return char;
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>