import {Alert, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {Picker} from '@react-native-picker/picker';
import {window} from '../../constant';

const Home = ({navigation}: {navigation: any}) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [selected, setSelected] = useState<number>(5); // ilk başta 5 gelmesi

  // Kelime listesi
  const words: string[] = ['zelal', 'yagmur', 'mustafa'];
  // Belirtilen uzunlukta rastgele bir kelime seçen fonksiyon
  // belirli bir uzunluğa sahip bir kelime seçmek için bir dizi kelime üzerinde filtreleme yapar ve ardından rastgele bir kelime seçer.
  const selectWord = (length: number): string => {
    //number kelime uzunluğu
    //  lenght e  eşit uzunluğa sahip bir kelime seçer. words dizisinde filter kullarak her kelimeyi length değeriyle karşılaştırır
    const filteredWords = words.filter(word => word.length === length);

    console.log(filteredWords);
    //mathfloor tam sayıya yuvarlar. ve rastgelene kelime döndürür.
    const randomIndex = Math.floor(Math.random() * filteredWords.length); //mathrandom fonksiyonu kullanarak filtered words dizisinden rastgele kelime seçmek için rasgele index oluşturur.
    return filteredWords[randomIndex]; //rasgele bir kelime seçer ve bu kelimeyi döndürür
  };
  //gelen değeri settexte atama
  const handleText1 = (value: string) => {
    setText1(value);
  };
  const handleText2 = (value: string) => {
    setText2(value);
  };
  //boş isim geldi mi gelmeedi mi kontrolü
  const handleStartGame = () => {
    if (text1 !== '' && text2 !== '') {
      const word = selectWord(selected);
      navigation.navigate('GameScreen', {
        text1: text1,
        text2: text2,
        selected: selected,
        word: word,
      });
    } else {
      Alert.alert('Lütfen isim girin');
    }
  };
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="1. oyuncunun ismi girin"
        value={text1}
        onChangeText={handleText1}
      />
      <TextInput
        style={styles.input}
        placeholder="2. oyuncunun ismi girin"
        value={text2}
        onChangeText={handleText2}
      />
      <Text style={styles.text}> Hey You! Choose word length</Text>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue: number) => setSelected(itemValue)}>
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="7" value={7} />
      </Picker>

      <TouchableOpacity
        style={[styles.button, {width: window.width - 64}]}
        onPress={handleStartGame}
        activeOpacity={0.8}>
        <Text style={{color: 'white', fontWeight: '600'}}>Start Game</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
