<template>
  <div class="card mb-3 border-0 rounded-0 shadow-none bg-light">
    <div class="card-header d-flex pb-1 pt-3 bg-light">
      <img src="../assets/user-avatar.jpg" class="user-avatar border" alt="" />
      <div>
        <h6 class="my-0 py-0">Blessed Sibanda</h6>
        <p class="small py-0 my-0">23 June 2021, 14:53</p>
      </div>
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'questionDetail', params: { id: question.id } }">
        <h5 class="card-title">{{ question.title }}</h5>
      </router-link>
      <div class="card-text">{{ question.body | truncate(160) }}...</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question'],
};
</script>

<style>
img.user-avatar {
  object-fit: cover;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 0.5em;
}
</style>
