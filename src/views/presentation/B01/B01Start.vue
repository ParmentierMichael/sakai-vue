<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';

const name = ref('Martine');

const loading = ref(false);

function reloadName() {
    loading.value = true;
    setTimeout(() => {
        name.value = 'Tarantino';
        loading.value = false;
    }, 3000);
}
</script>

<template>
    <h2>Bienvenue {{ name }} sans v-once</h2>
    <h2 v-once>Bienvenue {{ name }} avec v-once</h2>

    <Button @click="reloadName" :loading :icon="loading ? 'pi pi-spinner' : ''" label="Changer de prénom"></Button>
</template>
