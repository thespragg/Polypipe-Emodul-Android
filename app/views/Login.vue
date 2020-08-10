<template>
  <Page actionBarHidden="true" class="container">
    <FlexboxLayout
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="70%"
      height="100%"
    >
      <Image src="~/assets/images/polypipelogo.png" class="logo-image" />
      <Label class="error" v-if="error" :text="error" />
      <FlexboxLayout justifyContent="flex-start" alignItems="center" class="input-container">
        <Image src="~/assets/icons/email.png" class="login-icon" width="7%" />
        <TextField hint="Username/Email" width="85%" v-model="username" />
      </FlexboxLayout>
      <FlexboxLayout justifyContent="flex-start" alignItems="center" class="input-container">
        <Image src="~/assets/icons/lock.png" class="login-icon" width="7%" />
        <TextField hint="Password" secure="true" width="85%" v-model="password" />
      </FlexboxLayout>
      <Button text="Log In" @tap="logIn" class="login-button" width="100%" />
    </FlexboxLayout>
  </Page>
</template>

<script>
var SecureStorage = require("nativescript-secure-storage").SecureStorage;
var secureStorage = new SecureStorage();

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      logout: false,
    };
  },
  mounted() {
    if (this.logout) {
      this.$store.commit("setAuthenticated", false);
    } else {
      this.password = secureStorage.getSync({ key: "password" });
      this.username = secureStorage.getSync({ key: "username" });

      if(this.password){
        this.logIn();
      }
    }
  },
  methods: {
    logIn() {
      var login = {
        languageId: "en",
        password: this.password,
        rememberMe: true,
        username: this.username,
      };
      this.$http.post("login", login).then((res) => {
        if (res.data.authenticated) {
          secureStorage.setSync({
            key: "password",
            value: login.password,
          });

          secureStorage.setSync({
            key: "username",
            value: login.username,
          });
          this.$store.commit("setAuthenticated", true);
          this.$router.navigate("Home", "slideRight");
        } else {
          this.error = "Username or password is incorrect";
        }
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.container {
  background-color: #2d3d54;
  height: 100%;
  width: 100%;
}

.logo-image {
  margin-bottom: 5%;
  width: 90%;
}

textField {
  font-family: "OpenSans-Light";
  color: white;
  margin: 0 0 0 5%;
  placeholder-color: #d2d9df;
  border-bottom-width: 1;
  border-color: transparent;
}
.input-container {
  border-width: 0;
  border-color: transparent;
  border-bottom-width: 1;
  border-bottom-color: gray;
  margin: 3% 0 0 0;
}

.login-button {
  margin: 8% 0 0 0;
  height: 8%;
  border-radius: 10%;
  background: rgb(55, 59, 68);
  background: linear-gradient(
    90deg,
    rgb(58, 189, 180) 0%,
    rgb(94, 197, 204) 100%
  );
}
</style>