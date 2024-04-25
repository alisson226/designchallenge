import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useSession } from "../../provider/context/authContext";



export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={styles.container}>
      <View style = {styles.imgcontainer}>

      <Image
        style={styles.image}
        source={require('../../assets/images/app-logo.png')}
        />
        </View>
      <Text style={styles.title}>Page One!</Text>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    borderWidth: 2,
    borderColor: '#ff0000',
    alignItems: 'stretch',
    padding: 12,
    alignContent: 'center'
  },
  imgcontainer: {
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
  },
  image: {
    marginTop: 20,
    resizeMode: 'contain',
    flex:1,
    height: 'auto',
    maxHeight: 300
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    marginBottom: 12,
    color: Colors.light.text
  },
  subtitle: {
    fontSize: 28,
    maxWidth: 200,
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.light.text
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
