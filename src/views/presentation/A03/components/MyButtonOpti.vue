<script setup>
import Button from 'primevue/button';
import { onMounted, onUnmounted } from 'vue';

const listenKeyDown = (e) => {
    console.log(e.key);
};

onMounted(() => {
    console.log('composant créé');
    window.addEventListener('keydown', listenKeyDown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', listenKeyDown);
});
</script>

<template>
    <Button> Cliquez ici </Button>
</template>
