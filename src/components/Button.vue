<template>
  <button class="border-8 border-green-500" :style="buttonStyle">{{ label }}</button>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "black",
    },
    borderRadius: {
      type: [String, Number],
      default: 10, // Updated to a number
    },
    color: {
      type: String,
      default: "white",
    },
    width: {
      type: [String, Number],
      default: 100, // Updated to a number
    },
    height: {
      type: [String, Number],
      default: 40, // Updated to a number
    },
    label: {
      type: String,

      default: "button", // Updated to a number
    },
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.backgroundColor,
        borderRadius:
          typeof this.borderRadius === "number"
            ? this.borderRadius + "px"
            : this.borderRadius,
        color: this.color,
        width: typeof this.width === "number" ? this.width + "px" : this.width,
        height:
          typeof this.height === "number" ? this.height + "px" : this.height,
        label: this.label,
      };
    },
  },
};
</script>

<style>
button {
  /* Add any default button styles here */
  /* For example: padding, font-size, text color, etc. */
}
</style>
