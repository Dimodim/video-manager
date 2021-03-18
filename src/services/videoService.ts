import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:1337',
  withCredentials: false,

});

const analyticsService = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },

});

export class VideoService {
  uploadVideo = (video: FormData) => apiClient.post('/upload', video, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  // Backend
  getVideos = () => apiClient.get('/upload/files');

  getVideosByTitle = (title: string) => apiClient.get(`/upload/files/${title}`);

  // Analytics
  getVideoViews = (id: number) => analyticsService.get(`/videos/${id}`);

  putVideo = (video: {id: number; views: number}) => analyticsService.put(`/videos/${video.id}`, video);

  getVideosWithViews = () => analyticsService.get('/videos');
}
export default new VideoService();
