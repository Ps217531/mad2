import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Alert,
  NavigationContainer,
} from "react-native";
import TicTacToe_Local from "./compontents/TicTacToe Local";
import TicTacToe_AI from "./compontents/TicTacToe AI";
import TicTacToe_Online from "./compontents/TicTacToe Online";


const App = () => {
  const [ActiveTab, setActiveTab] = useState("TicTacToe local"); // TickTacToe local, TicTacToe online, TicTacToe AI

  useEffect(() => { console.log(ActiveTab) }, [ActiveTab]);

  const Nav = () =>
  {
    return (
      <View style={styles.container_nav}>
        <Pressable onPress={() =>setActiveTab("TicTacToe local")}>
          <Text>TickTacToe local</Text>
        </Pressable>
      
        <Pressable onPress={() => setActiveTab("TicTacToe AI")}>
          <Text>TickTacToe AI</Text>
        </Pressable> 
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {
        ActiveTab == "TicTacToe local" ? 
        <View style={styles.button}>
          <TicTacToe_Local/>
          <Nav />
        </View>
          :
        ActiveTab == "TicTacToe online" ? 
        <View style={styles.button}>
          <TicTacToe_Online />
          <Nav />
        </View>
          :
        ActiveTab == "TicTacToe AI" ? 
        <View style={styles.button}>
          <TicTacToe_AI />
          <Nav />
        </View>
          :
        <View>
          <Text>There is a problem, please try to reload the application</Text>
        </View>
      }
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "76%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  container_nav:{

     
    


  }, 

 
});