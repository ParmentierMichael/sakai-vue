<script setup>
import { ref } from 'vue';
import MyButton from './components/MyButton.vue';

const isLoading = ref(false);

function loading() {
    isLoading.value = true;
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
}
</script>
<template>
    <my-button label="Cliquez ici" :isLoading="isLoading" @click="loading" :underline="true" />
</template>
