import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet
} from 'react-native';

export default function App() {
  const gradePoints = { F:0, D:1.5, C:2, 'C+':2.75, B:3, 'B+':3.5, A:4 };

  const [sswd, setSswD] = useState('');
  const [ob, setOb] = useState('');

  const credits = 5;
  const totalCredits = 10;

  function clickMe() {
    alert("this is the click me button");
    Alert.alert("this is the click me button");

    const s1 = (gradePoints[(sswd||'').trim().toUpperCase()] || 0) * credits;
    const s2 = (gradePoints[(ob||'').trim().toUpperCase()] || 0) * credits;
    const total = s1 + s2;
    const gpa = total / totalCredits;

    const msg = `Total Score: ${total}/${totalCredits}\nGPA: ${gpa.toFixed(2)}`;
    alert(msg);
    Alert.alert("GPA Result", msg);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: "8%",
      paddingBottom: "8%",
      paddingHorizontal: "5%",
      backgroundColor: "#fff"
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginLeft: "0%",
      marginRight: "0%",
      padding: "2.5%",
      marginBottom: "3%",
      borderWidth: 1,
      borderColor: "#e5e5e5",
      borderRadius: 10
    },
    label: {
      width: "48%",
      fontSize: 16,
      fontWeight: "600"
    },
    textInput: {
      width: "48%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "5%"
    },
    buttonRow: {
      marginTop: "4%"
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GPA Calculator</Text>

      <View style={styles.row}>
        <Text style={styles.label}>SSWD</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade (A, B, C+, D, F)"
          value={sswd}
          onChangeText={setSswD}
          autoCapitalize="characters"
        />
      </View>
      

      <View style={styles.row}>
        <Text style={styles.label}>Organisational Behaviour</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade (A, B, C+, D, F)"
          value={ob}
          onChangeText={setOb}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.buttonRow}>
        <Button title="Submit" onPress={clickMe} />
      </View>
    </SafeAreaView>
  );
}
