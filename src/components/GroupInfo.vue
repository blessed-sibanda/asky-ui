<template>
  <div>
    <table class="table table-sm">
      <thead>
        <th colspan="2">
          <div class="d-flex align-items-center justify-content-between">
            <span>Lorem, ipsum dolor.</span>
            <div class="d-flex">
              <div>
                <span class="badge bg-success">Member</span>
              </div>
            </div>
          </div>
        </th>
      </thead>
      <tbody class="small">
        <th colspan="2">
          <a href="#" class="float-end btn btn-sm btn-primary rounded-0">Edit</a>
        </th>
        <tr>
          <th>Admin</th>
          <td>
            <a href="#" class="text-decoration-none text-secondary"
              >Blessed Sibanda</a
            >
          </td>
        </tr>
        <tr>
          <th>Group Type</th>
          <td>Private</td>
        </tr>
        <tr>
          <th>Created</th>
          <td>{{ new Date() }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table table-sm">
      <tr>
        <th>Members</th>
      </tr>

      <tr v-for="user in users" :key="user.id">
        <td class="small d-flex justify-content-between">
          <span>{{ user.name }}</span>

          <span class="small text-muted text-right"
            >Joined: {{ new Date().toLocaleDateString() }}</span
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Hardlife Mapukute' },
        { id: 1, name: 'Chiedza Toro' },
        { id: 1, name: 'Michael Mutopa' },
        { id: 1, name: 'Rosewita Chiwara' },
      ],
    };
  },
};
</script>

<style></style>
