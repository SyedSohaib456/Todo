import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [textLists, setTextLists] = useState([]);
  const [goalText, setGoalText] = useState("");
  const textInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };
  const btnAddHandler = () => {
    if (goalText !== "") {
      setTextLists((spreadList) => [
        ...spreadList,
        { text: goalText, key: Math.random().toString() },
      ]);
      setGoalText(""); 
    } else alert("Enter Task!");
    
  };

  const removeTask = (index) => {
    setTextLists(textLists.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#295F98",
            height: 35,
            borderRadius: 5,
            width: "70%",
            color: "white",
            flex: 1,
            paddingLeft: 10,
          }}
          placeholder="Enter your tasks..."
          placeholderTextColor="gray"
          onChangeText={textInputHandler}
          value={goalText}
        />
        <Button title="Add Task" onPress={btnAddHandler} />
      </View>
      <View style={styles.view2}>
        <Text style={{ color: "white", alignSelf: "center", fontWeight: 800 }}>
          Your Submitted Tasks
        </Text>
        {textLists.length > 0 ? (
          <FlatList
            style={{ width: "100%", gap: 5, paddingTop: 10 }}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            data={textLists}
            renderItem={(ItemData) => {
              return (
                <View style={styles.todo} key={ItemData.index}>
                  <View style={{width:'90%'}}> 
                    <Text style={{ color: "white" }}>{ItemData.item.text} </Text>
                  </View>
                  <View style={{width:'10%',display:'flex',alignItems:'flex-end'}} ><Icon
                    name="delete"
                    size={20}
                    style={{padding:2}}

                    color="#31363F"
                    onPress={() => removeTask(ItemData.index)}
                  /></View>
                </View>
              );
            }}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ color: "gray" }}> No tasks here!{""} </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    padding: 10,
    backgroundColor: "#16325B",
  },
  view1: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    paddingTop: 5,
  },

  view2: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 11,
    width: "100%",
  },
  todo: {
    backgroundColor: "#295F98",
    color: "white",
    width: "100%",
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1E2A5E",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
});
