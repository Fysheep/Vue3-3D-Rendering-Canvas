<script lang="ts">
export default {
  props: ['data'],
  data() {
    return {
      renderer: undefined as any
    }
  },
  mounted() {
    window.addEventListener('resize', this.drawFrame)
    this.drawFrame()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.drawFrame)
  },
  methods: {
    drawFrame() {
      this.calcViewPort()
      this.drawCircle()
    },
    getView(): { width: number; height: number } {
      const width = this.renderer.width
      const height = this.renderer.height

      return { width, height }
    },
    calcViewPort() {
      this.renderer = document.getElementById('renderer') as any
      const parent = this.renderer?.parentElement

      this.renderer.height = parent?.clientHeight
      this.renderer.width = parent?.clientWidth
    },
    drawCircle() {
      const context: CanvasRenderingContext2D = this.renderer.getContext('2d')
      const viewport = this.getView()

      context.moveTo(0, 0)
      context.lineWidth = Math.min(viewport.height, viewport.width) / 8
      context.lineTo(viewport.width, viewport.height)
      context.stroke()

      context.moveTo(0, viewport.height)
      context.lineWidth = Math.min(viewport.height, viewport.width) / 8
      context.lineTo(viewport.width, 0)
      context.stroke()

      context.font = '30px Arial'
      context.fillStyle = 'White'
      context.fillText(`Current Viewport: ${viewport.width}; ${viewport.height}`, 20, 50)
    }
  }
}
</script>

<template>
  <div class="expand fgr-1 fsh-1">
    <canvas id="renderer" height="100%" width="100%"> Your Browser does not Support Canvas</canvas>
  </div>
</template>
