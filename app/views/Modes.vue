<template>
  <Page class="container" actionBarHidden="true">
    <FlexboxLayout flexDirection="column">
      <Image src="~/assets/icons/hamburger.png" @tap="goToMenu" class="menu-hamburger" />
      <Label text="menu" />
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      this.$router.navigate("Menu", "slideRight");
    },
  },
  created() {},
};
</script>

<style scoped>
.menu-hamburger {
  width: 100px;
  align-self: flex-start;
  margin: 2% 0 0 4%;
}
</style>