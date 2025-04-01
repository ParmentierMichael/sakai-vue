<script setup>
const props = defineProps({
    isLoading: { type: Boolean, default: false }, // Props d'état
    underline: { type: Boolean, default: false }, // Props de configuration
    label: { type: String } // Props de template
});
</script>

<template>
    <button type="button" class="border-2 border-indigo-600 rounded" :class="underline ? 'underline' : ''">
        <span v-if="props.isLoading"> 🔄 </span>
        <template v-else>
            {{ props.label }}
        </template>
    </button>
</template>
