<script setup>
import { ref, onMounted, computed } from 'vue';
import { ProductService } from '@/service/ProductService';
import ProductEmpty from './components/ProductEmpty.vue';
import ProductList from './components/ProductList.vue';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

const searchQuery = ref('');

const filteredProducts = computed(() => {
    // Filtrer les produits en fonction du nom (case-insensitive)
    if (products.value) {
        return products.value.filter((product) => product.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    } else {
        return [];
    }
});
</script>

<template>
    <input type="text" v-model="searchQuery" placeholder="Rechercher un produit par nom" class="border border-gray-300 rounded-md px-4 py-2 w-1/3 pb-3 mb-6" />

    <template v-if="filteredProducts.length">
        <product-list :products="filteredProducts" />
    </template>
    <div v-else class="flex flex-col gap-2">
        <Message severity="error">Aucun contenu ne correspond à votre recherche</Message>
        <div class="gap-2 flex">
            <product-empty />
        </div>
    </div>
</template>
