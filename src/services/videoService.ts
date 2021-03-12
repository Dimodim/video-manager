import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:1337',
  withCredentials: false,

});

export class VideoService {
  uploadVideo = (video: FormData) => apiClient.post('/upload', video, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  getVideos = () => apiClient.get('/upload/files');
}
export default new VideoService();
