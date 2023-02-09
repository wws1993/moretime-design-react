<template>
  <div class="demo" id="underlyingRef">
    <div
      class="part"
      v-for="item in parts" :key="item"
      :style="`width:${item.slice(4)}px;height:${item.slice(4)}px;background:#${item}`"
    />

    <b class="spotlight" title="Hello clip-path！">Hello clip-path！</b>
  </div>

  <div class="demo1" id="coverRef">
    <div
      class="part"
      v-for="item in parts" :key="item"
      :style="`width:${item.slice(4)}px;height:${item.slice(4)}px;background:#${item}`"
    />
  
    <b class="spotlight" title="Hello clip-path！">Hello clip-path！</b>
  </div>
</template>

<script lang="ts" setup>
const parts = new Array(10).fill(null).map(() => String(Math.floor(Math.random() * 999999)).padStart(6, '0'))

onMounted(() => {
  const underlyingRef = document.querySelector('#underlyingRef') as HTMLDivElement
  const coverRef = document.querySelector('#coverRef') as HTMLDivElement

  underlyingRef.addEventListener('mousemove', ev => {
    const left = (ev.offsetX / underlyingRef.clientWidth * 100).toFixed(2) + '%'
    const top = (ev.offsetY / underlyingRef.clientHeight * 100).toFixed(2) + '%'
    coverRef.style.setProperty('--poi-top', top)
    coverRef.style.setProperty('--poi-left', left)
  })
  underlyingRef.addEventListener('mouseleave', () => {
    coverRef.style.setProperty('--poi-top', '-999%')
    coverRef.style.setProperty('--poi-left', '-999%')
  })
})
</script>

<style lang="less" scoped>
@import url('@css/mixin.less');
.demo{.flex(); .fix(200px); flex-wrap:wrap; gap:20px; overflow:hidden;
  &::after{content:''; .abs(0); background:#0008}
}
.demo1{.demo(); background-color:#fff; pointer-events:none;
  --size:200px; --poi-top:50%; --poi-left:50%;

  clip-path: ellipse(var(--size) var(--size) at var(--poi-left) var(--poi-top));
  &::after{
    top:calc(var(--poi-top) - var(--size) * 1.05); left:calc(var(--poi-left) - var(--size) * 1.05);
    width:calc(var(--size) * 2.1); height:calc(var(--size) * 2.1); border-radius:50%;
    background:radial-gradient(#fff0 20%, #000e);
  }
}
.part{border-radius:5px;}

.spotlight {position:relative; display:inline-block; font-size:48px;}
.spotlight::after{.abs(0); content:attr(title); color:red; animation:spotlight 3s ease-in-out infinite alternate;}
@keyframes spotlight {
  0% {
    clip-path: ellipse(1em 1em at 0% 50%);
  }
  100% {
    clip-path: ellipse(1em 1em at 100% 50%);
  }
}
</style>
