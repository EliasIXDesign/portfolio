<script setup>
import {ref, computed} from 'vue';
const TRAFFIC_LIGHTS = ["red", "orange","green"];
const lightIndex =ref(0);

const light =computed(() => TRAFFIC_LIGHTS[lightIndex.value]);

function nextLight () {
  lightIndex.value = (lightIndex.value + 1) % TRAFFIC_LIGHTS.length;
}
</script>

<template>
  <button @click="nextLight">Next light</button>
  <p class="text-amber-600">Light is: {{ light }}</p>
  <p>
    You must
    <span v-if="light === 'red'">STOP</span>
    <span v-else-if="light === 'orange'">SLOW DOWN</span>
    <span v-else-if="light === 'green'">GO</span>
  </p>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
