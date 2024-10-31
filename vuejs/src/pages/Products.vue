<template>
  <div>
    <api-dev :product="product" />
    <automation-tool :product="product" />c
    <cloud-solution :product="product" />
    <mobile-app-dev :product="product" />
    <web-app-dev :product="product" />
    <web-design-dev :product="product" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: App
</route>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref(route.params.product);

watch(
  () => route.params.product,
  (newProduct) => {
    product.value = newProduct;
  }
);
</script>
