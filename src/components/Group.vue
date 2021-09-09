<template>
  <div class="card mb-3 border-0 rounded-0 shadow-none bg-light">
    <div class="card-header border-0 d-flex pb-1 pt-3 bg-light">
      <img src="../assets/group-banner.jpg" class="group-banner border" alt="" />
      <div>
        <h6 class="my-0 py-0">{{ group.name }}</h6>
        <p class="small py-0 my-0">Engineering</p>
      </div>
    </div>
    <div class="card-body pt-1">
      <div class="card-text">{{ group.description | truncate(160) }}...</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['group'],
};
</script>

<style>
img.group-banner {
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 7px;
  margin-right: 0.5em;
}
</style>
