<template>
    <div class="card-body px-4">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <p class="fw-medium mb-0 fs-6">{{ text }}</p>
                <span class="text-secondary fs-12px">Alfian</span>
            </div>

            <button
                @click="
                    () => {
                        show = !show;
                    }
                "
                class="btn btn-outline-primary rounded-3 fs-14px"
            >
                <i class="fa-solid fa-plus me-2"></i>New Task
            </button>
        </div>

        <form v-if="show">
            <div class="mb-3 mt-3">
                <label for="todo" class="form-label fs-14px">New Task</label>
                <input
                    type="text"
                    placeholder="Tambahkan Task Baru"
                    class="form-control fs-14px"
                    id="todo"
                />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
        },
    },

    data() {
        return {
            show: false,
            payload: {
                text: "",
                status: 0,
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>
