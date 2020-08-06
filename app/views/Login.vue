<template>
  <Page actionBarHidden="true" class="container">
    <FlexboxLayout flexDirection="column" justifyContent="center" width="70%" height="100%">
      <Image src="~/assets/images/polypipelogo.png" class="logo-image"/>
      <FlexboxLayout justifyContent="flex-start" alignItems="center" class="input-container">
        <Image src="~/assets/icons/lock.png" class="login-icon" width="7%"/>
        <TextField hint="Username" width="50%" />
      </FlexboxLayout>
      <FlexboxLayout justifyContent="flex-start" alignItems="center" class="input-container">
        <Image src="~/assets/icons/lock.png" class="login-icon" width="7%"/>
        <TextField hint="password" secure="true" width="50%"/>
      </FlexboxLayout>      
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setAuthenticated", true);
  },
  methods: {
    goToMenu() {
      this.$router.navigate("Menu", "slideRight");
    },
  },
};
</script>

<style>
.container {
  background-color: #2d3d54;
  height: 100%;
  width: 100%;
}

.logo-image{
  margin-bottom: 100;
  width:90%
}

textField {
  font-family: "OpenSans-Light";
  color: white;
  placeholder-color: #d2d9df;
  border-bottom-width: 1;
  border-color: transparent;
}
.input-container {
  border-width: 0;
  border-color: transparent;
  border-bottom-width: 1;
  border-bottom-color: gray;
}

</style>