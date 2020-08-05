<template>
  <Page class="container" actionBarHidden="true">
    <FlexboxLayout flexDirection="column">
      <Image src="~/assets/icons/hamburger.png" @tap="goToMenu" class="menu-hamburger"/>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Menu from "./Menu";
export default {
  methods: {
    goToMenu() {
      this.$navigateTo(Menu, {
        transitionAndroid: {
          name: "slideRight",
          duration: 200,
          curve: "linear",
        },
      });
    },
  },
};
</script>

<style scoped>
.menu-hamburger{
  width:100px;
  align-self:flex-start;
  margin: 2% 0 0 4%;
}
</style>