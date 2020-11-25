<template>
    <div>
        <h1>This is Form</h1>
        <form @submit="publish">
            <label for="message">Message</label>
            <br>
            <textarea placeholder="Type!" v-model="currentStatus.text"></textarea>
            <br>
            <input type="checkbox" v-model="currentStatus.private">
            <span>Mark as private</span>
            <button v-bind:disabled="messageLimit">publish</button>
        </form>
        
        <div v-bind:class="{ 'message-limit' : messageLimit }">message length: {{ currentStatus.text.length }} / {{ maxLength }}</div>
        <br>
        <div>
            <div v-for="(update, index) in updates" :key="index" >
                <p v-show="update.private">PRIVATE</p>
                <p>{{ update.name }}</p>
                <pre>{{ update }}</pre>
            </div>
        </div>

        <p>{{ seconds }} have passed since you were on the webpage</p>

    </div>

</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            currentStatus: {
                name: 'Minchan',
                private: false,
                text: ''
            },
            maxLength: 100,
            updates: [],
            seconds: 0
        }
    },
    created() {
        setInterval(() => {
            this.seconds++;
        }, 1000);
    },
    computed: {
        messageLimit() {
            return this.currentStatus.text.length < this.maxLength ? false : true;
        }
    },
    methods: {
        publish(e) {
            e.preventDefault();
            const newStatus = {};
            //key to separate the references
            //***************************************** */
            Object.assign(newStatus, this.currentStatus);
            //***************************************** */
            //this.updates.push(newStatus);
            this.updates.unshift(newStatus);
            this.currentStatus.text = '';
        }
    }
}
</script>

<style>
    .message-limit {
        color: red;
    }
</style>