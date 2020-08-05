<template>
  <Page actionBarHidden="true">
    <FlexboxLayout flexDirection="column">
      <Image src="~/assets/icons/hamburger.png" @tap="goToMenu" class="menu-hamburger" />
      <FlexboxLayout class="current-mode" flexDirection="column" justifyContent="center" @tap="navigateToModes">
        <Label class="current-mode-label" text="Current Mode:" />
        <Label class="current-mode-main" text="Weekday" />
        <Label class="current-mode-tooltip" text="Tap the mode to change it" />
      </FlexboxLayout>
    </FlexboxLayout>
  </Page>
</template>

<script >
import Menu from "./views/Menu"
import Modes from "./views/Modes"

export default {
  components: {
    Menu,
  },
  data() {
    return {};
  },
  methods: {
    goToMenu() {
      this.$navigateTo(Menu, {
        transitionAndroid: {
          name: "slideRight",
          duration: 200,
          curve: "linear",
        },
      })},
      navigateToModes(){
        this.$navigateTo(Modes,{
        transitionAndroid: {
          name: "slideLeft",
          duration: 200,
          curve: "linear",
        }
      })
    },
  },
};
</script>

<style scoped>
.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.menu-hamburger {
  width: 100px;
  align-self: flex-start;
  margin: 2% 0 0 4%;
}
.current-mode {
  background-color: #31D16C;
  border-radius: 10%;
  margin: 2% 4% 0 4%;
  android-elevation:6;
}

.current-mode-label {
  font-family: "OpenSans-Light";
  color: white;
  font-size: 15pt;
  margin-top: 1%;
  margin-left: 1%;
}

.current-mode-main {
  color: white;
  font-size: 40pt;
  padding:3%;
  font-family: "OpenSans-SemiBold";
  align-self: center;
}

.current-mode-tooltip {
  color: #e6e6e6;
  font-size: 10pt;
  align-self: flex-end;
  margin-right: 4%;
}
</style>
