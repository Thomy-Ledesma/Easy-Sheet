import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import {initializeDb} from "../scripts/tables"

export default function RootLayout() {
  return <SQLiteProvider databaseName="easy_sheet.db" onInit={initializeDb}>
            <Stack/>
         </SQLiteProvider>; //for some reason this does not work
}
