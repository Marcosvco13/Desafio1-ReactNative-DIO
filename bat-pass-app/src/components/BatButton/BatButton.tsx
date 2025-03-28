import React, {useState} from 'react';
import { Pressable, Text, ToastAndroid } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerate(){
    let generateToken = generatePass(); 
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
    //alert('Password copied to clipboard!');
    ToastAndroid.showWithGravity(
      'Copiado para clipboard!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,)
  }

  return (
    <>
      <BatTextInput pass={pass}/>

      <Pressable onPress={handleGenerate} style={styles.button}>
          <Text style={styles.text}>Generate</Text>
      </Pressable>

      <Pressable onPress={handleCopyButton} style={styles.button}>
          <Text style={styles.text}>⚡Copy</Text>
      </Pressable>
    </>
  );
}