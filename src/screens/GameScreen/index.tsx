/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {window} from '../../constant';

const GameScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {text1, text2, word, selected} = route.params;
  const [data, setData] = useState(new Array(selected).fill('_'));
  const [character, setCharacter] = useState('');
  const [count1, setCount1] = useState(3);
  const [count2, setCount2] = useState(3);

  const insets = useSafeAreaInsets();
  console.log(insets);

  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleStartGame = () => {
    let isFound = false; // eşleşen harf için
    let newData = [...data]; //kelimenin harflerini tutacak olan dizi
    word.split('').forEach((char: string, index: number) => {
      //döngüdeki her bir harf char adıyla değişkene atanıyor. ve index de her harfin indexini tutuyor
      if (char === character) {
        //word ün içidenki harf(char) girilen karakter(charackter) eşitse
        //eğer girilen karakter word ün içinden döndüğü char a eşitse
        newData[index] = character; //newData dizisi, index indeksiyle güncelleniyo
        isFound = true;
      }
    });
    if (!isFound) {
      //is found yoksa eşleşen harf yoksa
      if (currentPlayer === 1) {
        setCount1(count1 - 1);
        if (count1 === 1) {
          Alert.alert(`${text1} !`);
          navigation.goBack();
          return;
        }
      } else {
        setCount2(count2 - 1);
        if (count2 === 1) {
          Alert.alert(`${text2} lost the game!`);
          navigation.goBack();
          return;
        }
      }
    }

    setData(newData);
    setCharacter('');
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handleTextInput = (text: string) => {
    setCharacter(text);
  };
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: insets.bottom + 16,
        },
      ]}>
      <View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.user}>1.kullanıcı: {text1}</Text>
          </View>
          <View style={styles.innerTextContainer}>
            <Text> Kalan Hak :{count1} </Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.user}>2.kullanıcı: {text2}</Text>
          </View>
          <View style={styles.innerTextContainer}>
            <Text> Kalan Hak :{count2} </Text>
          </View>
        </View>
        <View style={styles.wordContainer}>
          {data.map((e, index) => (
            <View key={index} style={{marginRight: 18}}>
              <Text style={styles.text}>{e}</Text>
            </View>
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder={`Player ${currentPlayer} `}
          maxLength={1}
          value={character}
          onChangeText={handleTextInput}
        />
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: window.width - 64,
          height: 46,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
          marginTop: 32,
          marginBottom: insets.bottom + 32,
        }}
        onPress={handleStartGame}
        activeOpacity={0.8}>
        <Text style={{color: 'white', fontWeight: '600'}}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;
