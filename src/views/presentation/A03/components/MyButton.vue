<script setup>
import Button from 'primevue/button';
import { onMounted } from 'vue';

const listenKeyDown = (e) => {
    console.log(e.key);
};
//Ajout de l'évènement
onMounted(() => {
    console.log('composant créé');
    window.addEventListener('keydown', listenKeyDown);
});
</script>

<template>
    <Button> Cliquez ici </Button>
</template>
