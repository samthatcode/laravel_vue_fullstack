<template>
  <div>
    <h2>Currently Available Trainees</h2>

    <ul>
      <li v-for="trainee in trainees" :key="trainee.id">
        <div :class="{ highlight: trainee.skill > 70 }" class="card">
          <div class="w-[70%]">
            <h3>{{ trainee.name }}</h3>
            <p>{{ trainee.training_center.name }}</p>
          </div>

          <!-- View Details Button -->
          <router-link
            :to="{ name: 'TraineeProfile', params: { id: trainee.id } }"
            class="btn"
          >
            View Details
          </router-link>

          <!-- Edit Button -->
          <router-link
            :to="{ name: 'EditTrainee', params: { id: trainee.id } }"
            class="btn-edit"
          >
            Edit
          </router-link>
        </div>
      </li>
    </ul>

    <!-- Pagination Controls -->
    <div class="pagination">
      <button
        @click="fetchTrainees(currentPage - 1)"
        :disabled="currentPage <= 1"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ lastPage }}</span>
      <button
        @click="fetchTrainees(currentPage + 1)"
        :disabled="currentPage >= lastPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import api from "../services/api.js";

export default {
  name: "TraineesList",

  data() {
    return {
      trainees: [],
      currentPage: 1,
      lastPage: 1,
    };
  },
  methods: {
    async fetchTrainees(page = 1) {
      try {
        const response = await api.getTrainees({ page });
        this.trainees = response.data.data.data; // Adjust based on API response structure
        this.currentPage = response.data.meta.current_page; // Assuming meta contains pagination info
        this.lastPage = response.data.meta.last_page;
      } catch (error) {
        console.error(
          "Error fetching trainees:",
          error.response?.data?.message || error.message
        );
      }
    },
  },
  mounted() {
    this.fetchTrainees();
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
