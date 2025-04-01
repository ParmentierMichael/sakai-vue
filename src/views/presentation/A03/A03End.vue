<script setup>
import { ref } from 'vue';
import MyButtonOpti from './components/MyButtonOpti.vue';

const isLoading = ref(false);

function loading() {
    isLoading.value = true;
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
}
</script>
<template>
    <my-button-opti :isLoading="isLoading" @click="loading" :underline="true"> Cliquez ici opti </my-button-opti>
</template>
