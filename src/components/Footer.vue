<template>
    <div class="card-body px-4 border-top">
        <p class="fw-medium mb-0 fs-6">Total Task : {{ length }}</p>
    </div>
</template>

<script>
export default {
    props: {
        length: {
            type: Number,
        },
    },
};
</script>

<style lang="scss" scoped></style>
