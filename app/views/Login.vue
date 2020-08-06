<template>
  <Page class="container" actionBarHidden="true">
    <FlexboxLayout flexDirection="column">
      <Label text="login"/>
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  mounted(){
    this.$store.commit("setAuthenticated",false);
  },
  methods: {
    goToMenu() {
      this.$router.navigate("Menu", "slideRight")
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