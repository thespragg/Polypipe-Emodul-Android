<template>
  <Page class="container" actionBarHidden="true">
    <StackLayout class="menu-links">
      <StackLayout class="menu-item" orientation="horizontal" @tap="navigateToHome">
        <Image src="~/assets/icons/home.png" class="icon" verticalAlignment="center"/>
        <Label class="link-text" text="Home" verticalAlignment="center"/>
      </StackLayout>
      <StackLayout class="menu-item" orientation="horizontal" @tap="navigateToZones">
        <Image src="~/assets/icons/zones.png" class="icon" verticalAlignment="center"/>
        <Label class="link-text" text="Zones" verticalAlignment="center"/>
      </StackLayout>
      <StackLayout class="menu-item" orientation="horizontal" @tap="navigateToStatistics">
        <Image src="~/assets/icons/statistics.png" class="icon" verticalAlignment="center"/>
        <Label class="link-text" text="Statistics" verticalAlignment="center"/>
      </StackLayout>
      <StackLayout class="menu-item" orientation="horizontal" @tap="navigateToModes">
        <Image src="~/assets/icons/modes.png" class="icon" verticalAlignment="center"/>
        <Label class="link-text" text="Modes" verticalAlignment="center"/>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import App from "~/App"
import Zones from "~/views/Zones"
import Statistics from "~/views/Statistics"
import Modes from "~/views/Modes"

export default {
  components:{
    App,
    Zones
  },
  data(){
    return {
      transition: {
          name: "slideLeft",
          duration: 200,
          curve: "linear"
        }
    }
  },
  methods:{
    navigateToHome() {this.$navigateTo(App, {transitionAndroid: this.transition})},
    navigateToZones(){this.$navigateTo(Zones, {transitionAndroid: this.transition})},
    navigateToStatistics(){this.$navigateTo(Statistics, {transitionAndroid: this.transition})},
    navigateToModes(){this.$navigateTo(Modes, {transitionAndroid: this.transition})}
  }
};
</script>

<style scoped>
.container {
  background-image: url("~/assets/images/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.menu-links {
  margin: 4% 0 0 8%;
}

.menu-item{
  margin: 1.5% 0 1.5% 0;
}

.icon{
  width: 100px;
}

.link-text{
  margin-left: 5%;
  font-family: "OpenSans-Light";
  font-size: 30pt;
  color:white;
}
</style>