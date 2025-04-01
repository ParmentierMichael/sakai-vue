<script setup>
import { ref, onMounted, computed } from 'vue';
import { ProductService } from '@/service/ProductService';
import Message from 'primevue/message';

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
                    <tr v-for="product in filteredProducts" :key="product.id" class="border-b hover:bg-gray-50">
                        <td class="py-3 px-6 text-sm">{{ product.id }}</td>
                        <td class="py-3 px-6 text-sm">{{ product.code }}</td>
                        <td class="py-3 px-6 text-sm">{{ product.name }}</td>
                        <td class="py-3 px-6 text-sm">{{ product.description }}</td>
                        <td class="py-3 px-6 text-sm"><img :src="`https://primefaces.org/cdn/primevue/images/product/${product.image}`" alt="product image" class="w-16 h-16 object-cover" /></td>
                        <td class="py-3 px-6 text-sm">{{ product.price }} €</td>
                        <td class="py-3 px-6 text-sm">{{ product.category }}</td>
                        <td class="py-3 px-6 text-sm">{{ product.quantity }}</td>
                        <td class="py-3 px-6 text-sm">{{ product.inventoryStatus }}</td>
                        <td class="py-3 px-6 text-sm">{{ product.rating }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </template>

    <div v-else class="flex flex-col gap-2">
        <Message severity="error">Aucun contenu ne correspond à votre recherche</Message>

        <div class="gap-2 flex">
            <Card style="width: 25rem; overflow: hidden">
                <template #header>
                    <img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
                </template>
                <template #title>Advanced Card</template>
                <template #subtitle>Card subtitle</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-1">
                        <Button label="Cancel" severity="secondary" outlined class="w-full" />
                        <Button label="Save" class="w-full" />
                    </div>
                </template>
            </Card>
            <Card style="width: 25rem; overflow: hidden">
                <template #header>
                    <img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
                </template>
                <template #title>Advanced Card</template>
                <template #subtitle>Card subtitle</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-1">
                        <Button label="Cancel" severity="secondary" outlined class="w-full" />
                        <Button label="Save" class="w-full" />
                    </div>
                </template>
            </Card>
            <Card style="width: 25rem; overflow: hidden">
                <template #header>
                    <img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
                </template>
                <template #title>Advanced Card</template>
                <template #subtitle>Card subtitle</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-1">
                        <Button label="Cancel" severity="secondary" outlined class="w-full" />
                        <Button label="Save" class="w-full" />
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>
