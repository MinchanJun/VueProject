<template>
    <div class="photographer">
        Photo taken by: <a :href="link">{{ name }}</a>
    </div>
</template>

<script>
export default {
    name: 'Photographer',
    props: {
        link: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
}
</script>