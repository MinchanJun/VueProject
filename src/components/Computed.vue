<template>
    <div>
        <p>My firstName: {{ firstName }}</p>
        <p>My lastName: {{ lastName }}</p>
        <p>My fullName: {{ fullName }}</p>
        <pre>
            {{ complexObject }}
        </pre>
        <a :href="link">Link to Google</a>
        <!-- You can also bind image like above -->
        <img id="back" :src="imageLink" alt="New Picture" >
        <img :src="require(`../assets/${imageURL}`)" alt="HELLE" >
    </div>
</template>

<script>
export default {
    name: "Computed",
    data() {
        return {
            firstName: 'Minchan',
            lastName: 'Jun',
            complexObject: {
                id: 1,
                personNumber: [1,2,3]
            },
            link: 'https://google.com',
            imageURL: '1.png',
            imageLink: 'https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
        }
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
}
</script>

<style>
    #back {
        width: 100px;
        height: 100px;
    }
</style>