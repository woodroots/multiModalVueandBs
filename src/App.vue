<template>
  <div id="app">
    <div class="container">
      <div class="row py-5">
        <div class="col">
          <button class="btn btn-primary" v-on:click="openModal('modalContents','modal-lg')">モーダルを開く</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this);
  }
};
</script>

<style>
</style>
