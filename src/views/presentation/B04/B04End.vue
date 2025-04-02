<script setup>
import { defineAsyncComponent, ref } from 'vue';
import Loading from './components/Loading.vue';

const BestSellingWidget = defineAsyncComponent({
    // the loader function
    loader: () => import('./components/BestSellingWidget.vue'),

    // A component to use while the async component is loading
    loadingComponent: Loading,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,

    // A component to use if the load fails
    // errorComponent: ErrorComponent,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000
});

const show = ref(false);
</script>

<template>
    <div class="m-3 flex flex-col">
        <div>
            <Button label="Voir le contenu" @click="show = !show" />
            <BestSellingWidget v-if="show" />
        </div>
    </div>
</template>
