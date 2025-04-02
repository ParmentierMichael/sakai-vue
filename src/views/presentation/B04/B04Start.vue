<script setup>
import { ref } from 'vue';
import BestSellingWidget from './components/BestSellingWidget.vue';
const show = ref(false);
</script>

<template>
    <Button label="Voir le contenu" @click="show = !show" />
    <BestSellingWidget v-if="show" />
</template>
