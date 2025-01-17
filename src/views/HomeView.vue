<script lang="ts">
import RendererComponent from '@/components/RendererComponent.vue'
import type { world } from '@/model/rendering';

export default {
  components: {
    RendererComponent
  },
  data(){
    return {
      world: {

      } as world
    }
  }
}
</script>

<template>
  <main class="dp-flex fd-c gap-3 p-3">
    <h1 class="text-center">3D Canvas</h1>
    <RendererComponent :data="world"/>
  </main>
</template>
