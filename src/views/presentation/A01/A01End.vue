<script setup>
import { ref } from 'vue';
import ToggleSwitch from 'primevue/toggleswitch';
const isConnected = ref(true);
import UserConnectedContent from './components/UserConnectedContent.vue';
import UserNotConnectedContent from './components/UserNotConnectedContent.vue';
</script>

<template>
    <ToggleSwitch v-model="isConnected" />

    <div v-if="isConnected" class="flex gap-4">
        <user-connected-content />
    </div>
    <div v-else>
        <user-not-connected-content />
    </div>
</template>
