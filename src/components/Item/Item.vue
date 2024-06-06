<template>
    <div class="card shadow-sm rounded-3 mb-3">
        <div class="card-body">
            <div class="d-flex">
                <div class="w-100">
                    <p
                        class="mb-0"
                        :class="{
                            'text-decoration-line-through': todo.status == 1,
                        }"
                    >
                        {{ todo.text }}
                    </p>
                </div>

                <div class="w-auto">
                    <i v-if="todo.status == 0" class="fa-regular fa-circle"></i>
                    <i
                        v-else-if="todo.status == 1"
                        class="fa-solid fa-circle-check text-success"
                    ></i>
                </div>
            </div>
        </div>
        <div
            class="border-top px-3 pt-1 pb-2 d-flex align-items-center justify-content-between"
        >
            <div class="w-100">
                <span
                    class="fs-12px"
                    :class="{
                        'text-danger': todo.status == 0,
                        'text-succes': todo.status == 1,
                    }"
                    >{{ todo.status == 0 ? "Available" : "Finished" }}</span
                >
                <span class="fs-12px"> Created At 2024-03-02</span>
            </div>

            <div class="w-auto">
                <i class="fa-solid fa-trash-can text-danger"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped></style>
