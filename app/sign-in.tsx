import { StyleSheet, Image } from "react-native";
import FilledButton from "../components/FilledButton";
import OutlineButton from "../components/OutlineButton";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import { useSession } from "../provider/context/authContext";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/app-logo.png")}
          resizeMethod="scale"
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>To your bright future</Text>
      <FilledButton pressefect = {() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}label="Start Now"></FilledButton>
      <OutlineButton label="Sign up with Google"></OutlineButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: "stretch",
    padding: 12,
    alignContent: "center",
  },
  imgcontainer: {
    marginTop: 120,
    alignItems: "center",
    maxHeight: 310,
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    alignContent: "stretch",
    height: "auto",
  },
  title: {
    fontSize: 24,
    marginTop: 60,
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 12,
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 38,
    maxWidth: 300,
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "center",
    color: Colors.light.text,
    marginBottom: 100,
  },
});
