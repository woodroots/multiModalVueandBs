<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="id"
    aria-hidden="true"
  >
    <div class="modal-dialog" :class="size" role="document">
      <component v-bind:is="contents"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalOuter",
  props: { contents: null, size: null, id: null }
};
</script>

