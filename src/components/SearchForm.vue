<template>
    <div>
        <form @submit.prevent="clicked">
            <input v-model="searchText" type="text">
            <button type="submit">Submit</button>
            <p v-if="error" class="error" >{{ getError }}</p>
        </form>
    </div>
</template>

<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class SearchForm extends Vue {
    searchText=''

    @Prop() error;

    clicked() {
      this.$emit('clicked', this.searchText);
    }
}
</script>

<style scoped>
.error{
    color:red;
}
</style>
