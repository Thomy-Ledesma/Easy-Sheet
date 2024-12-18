import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';


const db = useSQLiteContext();
const [characters, setCharacters] = useState<characterType[]>([])
/*const character_ids = [1,2,3,4]*/

type characterType = {id: number; name: string; race_id: number; class_id: number; level: number; background: string}
const loadData = async () =>{
  const result = await db.getAllAsync<characterType>("SELECT * FROM characters;")
  setCharacters(result)
}
useFocusEffect(
  useCallback(() =>{
    loadData() //documentation indicates useCallback should be called inside here, but it returns an error
  }, [])
)

const list_characters = characters.map((character) =>
  <Link href={`./${character.id}`} key={character.id}>{character.name}</Link>
);



const Select_screen = () => {
  return (
    <View>
      <Text>Choose a character</Text>
      {list_characters}
    </View>
  );
};

export default Select_screen;
