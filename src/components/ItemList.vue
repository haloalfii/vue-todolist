<template>
    <div class="mt-3">
        <Item
            v-for="(todo, index) of todos"
            :key="'index-todo-' + index"
            :todo="todo"
        />
    </div>
</template>

<script>
import Item from "./Item/Item.vue";

export default {
    components: {
        Item,
    },

    data() {
        return {
            todos: [
                {
                    text: "Belajar Vue Js",
                    status: 0,
                    created_at: "2024-06-06",
                },
                {
                    text: "Belajar HTML",
                    status: 1,
                    created_at: "2024-06-06",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
