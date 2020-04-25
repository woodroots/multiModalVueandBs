<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">これはmodalContentsです。</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      これはmodalContentsです。
      <br />
      <br />
      <a href="#" v-on:click="openModal('modalsubContents','modal-sm')">さらにモーダルを開く！</a>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
      <button type="button" class="btn btn-primary">OK</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

