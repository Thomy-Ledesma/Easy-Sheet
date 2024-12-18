import { Link } from "expo-router";
import { Text, View} from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {initializeDb} from "../scripts/tables"

export default function Index() {
  const db = useSQLiteContext();
  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Easy Character Sheet</Text>
      <Link href="./selectScreen">Choose a character</Link>
      <Text>Create new character</Text>
    </View>
  );
}

