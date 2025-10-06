import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';

export default function App() {

  const gradePoints = {
    'F': 0,
    'D': 1.5,
    'C': 2,
    'C+': 2.75,
    'B': 3,
    'B+': 3.5,
    'A': 4
  };

  const [sswd, setSswD] = useState('');
  const [ob, setOb] = useState('');

  const credits = 5;
  const totalCredits = 10;

  function clickMe() {
    alert("this is the click me button");   // web
    Alert.alert("this is the click me button");  // mobile

    const ssw = sswd.toUpperCase();
    const oba = ob.toUpperCase();

    const sswdScore = (gradePoints[ssw] || 0) * credits;
    const obScore = (gradePoints[oba] || 0) * credits;
    const totalScore = sswdScore + obScore;

    const gpa = totalScore / totalCredits;

    const result = "Total Score: " + totalScore + "/" + totalCredits + "\nGPA: " + gpa.toFixed(2);
    alert(result);
    Alert.alert("GPA Result", result);
  }

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10%"
          }}
        >
          GPA Calculator
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>SSWD</Text>
        <TextInput
          placeholder="Grade (A, B, C+, D, F)"
          value={sswd}
          onChangeText={setSswD}
          autoCapitalize="characters"
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
            marginTop: 5
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Organisational Behaviour</Text>
        <TextInput
          placeholder="Grade (A, B, C+, D, F)"
          value={ob}
          onChangeText={setOb}
          autoCapitalize="characters"
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
            marginTop: 5
          }}
        />
      </View>

      <View style={{ marginTop: 30 }}>
        <Button title="Submit" onPress={clickMe} />
      </View>
    </SafeAreaView>
  );
}
