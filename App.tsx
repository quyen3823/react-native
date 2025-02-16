
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [name, setName] = useState<string>("react native");
  const [age, setAge] = useState<number>(0);
  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "Quyen Quyen",
    age: 25

  })
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{JSON.stringify(person)}</Text>
        <Text style={styles.text}>{age}</Text>
      </View>
      <View>
        <Text style={styles.text}>Hello Word</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60, color: "red",
    paddingTop: 30,
    paddingHorizontal: 20
  },
});
