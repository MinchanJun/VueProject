const colourMixin = {
    methods: {
        randomColour(component) {
            const colours = [
                "red",
                "blue",
                "green",
                "yellow"
            ];

            const changedColour = colours[Math.floor(Math.random() * colours.length)];
            // console.log(changedColour)
            component.styleObject.color = changedColour;
            return changedColour;
        }
    }
}

export default colourMixin;