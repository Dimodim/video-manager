import { IVideo } from '@/Interfaces/IVideo';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'localhost:1337',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export class VideoService {
  uploadVideo(video: IVideo): any {
    return apiClient.post('/upload', video);
  }

  getVideos(): any {
    return apiClient.get('/upload/files');
  }
}
export default new VideoService();
