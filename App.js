import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={{flex: 0.4 ,alignItems: 'center',justifyContent: 'center',}}>
        <Text>SAMPLE</Text></View>
      <View style ={{flex: 0.05,flexDirection: 'row',marginLeft: 60}}>
      <Text>Username: </Text>
      <View style ={{borderRadius:30,backgroundColor: 'white',flex:0.8,marginVertical:0}}><TextInput></TextInput></View>
      </View>
      <View style ={{flex: 0.1,flexDirection: 'row',marginLeft: 60}}>
      <Text>Password:</Text>
      <View><TextInput></TextInput></View>
      </View>
      <View style ={{flex: 0.05 ,alignItems: 'center',justifyContent: 'center',}}>
        <Text>LOGIN</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    
  },
});
