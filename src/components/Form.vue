<template>
    <div>
        <h1>This is Form</h1>
        <form @submit="publish">
            <label for="message">Message</label>
            <textarea placeholder="Type!" v-model="currentStatus.text"></textarea>
            <button v-bind:disabled="messageLimit">publish</button>
        </form>

        <div v-bind:class="{ 'message-limit' : messageLimit }">message length: {{ currentStatus.text.length }} / {{ maxLength }}</div>

        <div>
            <div v-for="(update, index) in updates" :key="index" >
                <p>{{ update.name }}</p>
                <pre>{{ update }}</pre>
            </div>
        </div>
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
            updates: []
        }
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
            this.updates.push(newStatus);
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