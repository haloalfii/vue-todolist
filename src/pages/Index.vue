<template>
    <div class="card rounded-3 shadow-sm">
        <Header />

        <div class="card-body px-4 border-top">
            <Navigation />
            <ItemList />
        </div>

        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";
import ItemList from "../components/ItemList.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Header,
        Navigation,
        ItemList,
        Footer,
    },
};
</script>

<style lang="scss" scoped></style>
