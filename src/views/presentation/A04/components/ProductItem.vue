<script setup>
const props = defineProps({
    product: { type: Object }
});
</script>
<template>
    <tr class="border-b hover:bg-gray-50">
        <td class="py-3 px-6 text-sm">{{ props.product.id }}</td>
        <td class="py-3 px-6 text-sm">{{ props.product.code }}</td>
        <td class="py-3 px-6 text-sm">{{ props.product.name }}</td>
        <td class="py-3 px-6 text-sm">{{ props.product.description }}</td>
        <td class="py-3 px-6 text-sm"><img :src="`https://primefaces.org/cdn/primevue/images/product/${props.product.image}`" alt="product image" class="w-16 h-16 object-cover" /></td>
        <td class="py-3 px-6 text-sm">{{ props.product.price }} €</td>
        <td class="py-3 px-6 text-sm">{{ props.product.category }}</td>
        <td class="py-3 px-6 text-sm">{{ props.product.quantity }}</td>
        <td class="py-3 px-6 text-sm">{{ props.product.inventoryStatus }}</td>
        <td class="py-3 px-6 text-sm">{{ props.product.rating }}</td>
    </tr>
</template>
