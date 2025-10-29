import axios from 'axios';
import { getTransitionRawChildren } from 'vue';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api/v1/trainees',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    getTrainees(params = {}) {
        return apiClient.get('', { params });
    },
    getTraineeById(id) {
        return apiClient.get(`/${id}`);
    },
    createTrainee(data) {
        return apiClient.post('', data);
    },
    updateTrainee(id, data) {
        return apiClient.put(`/${id}`, data);
    },
    deleteTrainee(id) {
        return apiClient.delete(`/${id}`);
    },
    getTrainingCenters() {
        return apiClient.get('/training-centers');
    },
};


// GET /trainees calls the index method.
// GET /trainees/{id} calls the show method.
// POST /trainees calls the store method.
// PUT /trainees/{id} calls the update method.
// DELETE /trainees/{id} calls the destroy method.