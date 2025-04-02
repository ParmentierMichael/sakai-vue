<script setup>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';

const props = defineProps({
    products: { type: Array, default: () => [] }
});

const selectedItemId = ref('');
</script>

<template>
    <p>Item selectionné : {{ selectedItemId }}</p>

    <div class="p-datatable-table-container">
        <table class="min-w-full table-auto border-collapse shadow-lg">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="py-3 px-6 text-left">ID</th>
                    <th class="py-3 px-6 text-left">Code</th>
                    <th class="py-3 px-6 text-left">Nom</th>
                    <th class="py-3 px-6 text-left">Description</th>
                    <th class="py-3 px-6 text-left">Image</th>
                    <th class="py-3 px-6 text-left">Prix</th>
                    <th class="py-3 px-6 text-left">Catégorie</th>
                    <th class="py-3 px-6 text-left">Quantité</th>
                    <th class="py-3 px-6 text-left">Statut</th>
                    <th class="py-3 px-6 text-left">Évaluation</th>
                </tr>
            </thead>
            <tbody>
                <!-- Passage par props du composant selectionné -->
                <!-- <ProductItem v-for="product in props.products" :key="product.id" :product="product" :selectedItemId="selectedItemId" @click="selectedItemId = product.id" /> -->
                <ProductItem v-for="product in props.products" :key="product.id" :product="product" :isSelected="selectedItemId === product.id" @click="selectedItemId = product.id" />
            </tbody>
        </table>
    </div>
</template>
