<script lang="ts">
export default {
  props: ['data'],
  mounted() {
    const renderer = document.getElementById('renderer') as any
    const parent = renderer?.parentElement
    
    renderer.height = parent?.clientHeight
    renderer.width = parent?.clientWidth
  }
}
</script>

<template>
  <div class="expand fgr-1">
    <canvas id="renderer" height="100%" width="100%" />
  </div>
</template>
