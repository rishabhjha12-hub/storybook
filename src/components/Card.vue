<template>
  <div class="card" role="region" :aria-label="title">
    <div
      class="media"
      :style="mediaBg"
      v-if="mediaHref"
      role="img"
      :aria-label="title + ' image'"
    ></div>
    <h4 class="title" role="heading" aria-level="2">{{ title }}</h4>
    <small class="secondary-text">{{ subHeader }}</small>
    <p class="supporting-tex">{{ supportingText }}</p>
    <div v-if="buttonText">
      <a class="material-button" role="button">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    subHeader: String,
    mediaHref: String,
    supportingText: String,
    buttonText: String,
  },
  computed: {
    mediaBg() {
      return {
        backgroundImage: `url(${this.mediaHref})`,
      };
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
.card {
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: rgb(150, 150, 150) 0px 1px 3px;
  width: 350px;
  padding: 0.8rem;
  font-family: "Quicksand", sans-serif;
}

.media {
  height: 200px;
}

.title {
  margin-bottom: 0;
}

.material-button {
  color: rgb(76, 6, 141);
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 0.5rem;
  font-weight: bold;

  transition: 0.3s all linear;
}

.material-button:hover {
  background-color: rgba(106, 20, 185, 0.082);
}
</style>
