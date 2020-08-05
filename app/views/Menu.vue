<template>
  <Page class="container" actionBarHidden="true">
    <StackLayout class="menu-links">
      <StackLayout class="menu-item" orientation="horizontal" @tap="menuNavigation('Home')">
        <Image src="~/assets/icons/home.png" class="icon" verticalAlignment="center" />
        <Label class="link-text" text="Home" verticalAlignment="center" />
      </StackLayout>
      <StackLayout class="menu-item" orientation="horizontal" @tap="menuNavigation('Zones')">
        <Image src="~/assets/icons/zones.png" class="icon" verticalAlignment="center" />
        <Label class="link-text" text="Zones" verticalAlignment="center" />
      </StackLayout>
      <StackLayout class="menu-item" orientation="horizontal" @tap="menuNavigation('Statistics')">
        <Image src="~/assets/icons/statistics.png" class="icon" verticalAlignment="center" />
        <Label class="link-text" text="Statistics" verticalAlignment="center" />
      </StackLayout>
      <StackLayout class="menu-item" orientation="horizontal" @tap="menuNavigation('Modes')">
        <Image src="~/assets/icons/modes.png" class="icon" verticalAlignment="center" />
        <Label class="link-text" text="Modes" verticalAlignment="center" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import App from "~/App";

export default {
  components: {
    App,
  },
  mounted() {
  },
  data() {
    return {};
  },
  methods: {
    menuNavigation(destination) {
      this.$router.navigate(destination, "slideLeft");
    },
  },
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

.menu-item {
  margin: 1.5% 0 1.5% 0;
}

.icon {
  width: 100px;
}

.link-text {
  margin-left: 5%;
  font-family: "OpenSans-Light";
  font-size: 30pt;
  color: white;
}
</style>