<script setup>
const videoId = 'dQw4w9WgXcQ';
const videoUrl = `https://www.youtube.com/embed/${videoId}`;
</script>

<template>
  <div class="video-container">
    <iframe
      width="680"
      height="430"
      :src="videoUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.video-container {
  max-width: 100%;
  display: flex;
  justify-content: center;
}
</style>
