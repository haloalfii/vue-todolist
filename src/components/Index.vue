<template>
    <div class="card rounded-3 shadow-sm">
        <div class="card-body px-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p class="fw-medium mb-0 fs-6">Today's Task</p>
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
                    <label for="todo" class="form-label fs-14px"
                        >New Task</label
                    >
                    <input
                        type="text"
                        placeholder="Tambahkan Task Baru"
                        class="form-control fs-14px"
                        id="todo"
                    />
                </div>
            </form>
        </div>

        <div class="card-body px-4 border-top">
            <div class="d-flex align-items-center mb-3">
                <a href="#" class="me-3 d-flex align-items-center">
                    <p class="mb-0">All</p>
                    <span class="badge text-bg-primary rounded-circle ms-1"
                        >4</span
                    >
                </a>

                <a href="#" class="me-3 d-flex align-items-center">
                    <p class="mb-0">Finished</p>
                </a>

                <a href="#" class="me-3 d-flex align-items-center">
                    <p class="mb-0">Available</p>
                </a>
            </div>

            <div class="card shadow-sm rounded-3 mb-3">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="w-100">
                            <p class="mb-0">Belajar Vue Js</p>
                        </div>

                        <div class="w-auto">
                            <i class="fa-regular fa-circle"></i>
                        </div>
                    </div>
                </div>
                <div
                    class="border-top px-3 pt-1 pb-2 d-flex align-items-center justify-content-between"
                >
                    <div class="w-100">
                        <span class="text-danger fs-12px">Available</span>
                        <span class="fs-12px"> Created At 2024-03-02</span>
                    </div>

                    <div class="w-auto">
                        <i class="fa-solid fa-trash-can text-danger"></i>
                    </div>
                </div>
            </div>

            <div class="card shadow-sm rounded-3 mb-3">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="w-100">
                            <p class="mb-0 text-decoration-line-through">
                                Belajar HTML
                            </p>
                        </div>

                        <div class="w-auto">
                            <i
                                class="fa-solid fa-circle-check text-success"
                            ></i>
                        </div>
                    </div>
                </div>
                <div
                    class="border-top px-3 pt-1 pb-2 d-flex align-items-center justify-content-between"
                >
                    <div class="w-100">
                        <span class="text-success fs-12px">Finished</span>
                        <span class="fs-12px"> Created At 2024-03-02</span>
                    </div>

                    <div class="w-auto">
                        <i class="fa-solid fa-trash-can text-danger"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-body px-4 border-top">
            <p class="fw-medium mb-0 fs-6">Total Task : 4</p>
        </div>
    </div>
</template>

<script>
export default {
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
