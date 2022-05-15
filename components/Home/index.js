import React from "react";
import { View } from "react-native";
import styles from './styles.js';
function Home() {
return (
 <View>
 <View style={[styles.btn, styles.firstBtn]}>First
button</View>
 <View style={[styles.btn, styles.secondBtn]}>Second
button</View>
 </View>
 );
 }