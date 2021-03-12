<template>
    <div>
        <h1>Upload Videos</h1>
        <form @submit.prevent="onUpload">
           <div class="field">
            <label>Title</label>
            <input
              id="title"
              type="text"
              v-model="title"
              @blur="$v.title.$touch()"
            />
            <div v-if="$v.title.$error">
              <p v-if="!$v.title.required" class="error">The Titel is required</p>
            </div>
          </div>
          <div class="field">
            <label>Description</label>
            <textarea
              id="description"
              v-model="description"
              @blur="$v.description.$touch()"
            />
            <div v-if="$v.description.$error">
              <p v-if="!$v.description.required" class="error">Please enter a description</p>
            </div>
          </div>
           <div>
            <label>Chose Video</label>
            <input
              id="video"
              placeholder="Upload"
              type="file"
              @blur="$v.video.$touch()"
              @change="onImageSelected"
            />
            <div v-if="$v.video.$error">
              <p v-if="!$v.video.required" class="error">Please enter a description</p>
            </div>
          </div>
          <BaseButton
            :disabled="$v.$invalid"
            type="submit"
            buttonClass="-fill-gradient"
            >Submit
          </BaseButton>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import BaseButton from '@/components/BaseButton.vue';
import VideoService from '@/services/videoService';
import BaseInput from '../components/BaseInput.vue';

@Component({
  components: {
    BaseInput,
    BaseButton,
  },
  validations: {
    title: { required },
    description: { required },
    video: { required },
  },
})

export default class UploadVideos extends Vue {
  title = '';

  description = '';

  video: any = null;

  onImageSelected(event: any) {
    this.video = event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    formData.append('files', this.video, this.video.name);
    VideoService
      .uploadVideo(formData)
      .then((r) => console.log(r));
  }
}

</script>

<style>
.field {
  margin-bottom: 24px;
  display:block;
}
input[type = text] {
   width: 35%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  width: 35%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.error{
  color: red;
}
</style>
