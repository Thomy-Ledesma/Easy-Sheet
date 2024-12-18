import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const CharacterSheet = () => {
  const { character } = useLocalSearchParams();

  return (
    <View>
      <Text>Character number: {character}</Text>
    </View>
  );
};

export default CharacterSheet;
