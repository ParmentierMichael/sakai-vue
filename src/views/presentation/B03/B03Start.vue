<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    console.log('page B03 chargée');
});

const v1 = ref(true);
const v2 = ref(true);
const v3 = ref(true);
</script>

<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <div class="flex items-center gap-2">
            <Checkbox v-model="v1" binary />
            <label> Condition 1 </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="v2" binary />
            <label> Condition 2 </label>
        </div>
        <div class="flex items-center gap-2">
            <Checkbox v-model="v3" binary />
            <label> Condition 3 </label>
        </div>
    </div>

    <div>
        <!-- Se reaffiche uniquement si v1 ou v2 est modifié -->
        <p v-memo="[v1, v2]">{{ Math.random() }}</p>
    </div>
</template>
