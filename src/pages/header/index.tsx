import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'

import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Header(props)
{
    const navigate = useNavigation();
    if(!props.hasBackButton)
    {
        return (
            <View style={styles.header}>
               <Image source={logoImg}></Image>
               <Text style={styles.headerText}>
                   Total de <Text style={styles.headerTextBold}>{props.casos} casos.</Text>
               </Text>
           </View>
       );
    }
    return (
        <View style={styles.header}>
           <Image source={logoImg}></Image>
           
           <TouchableOpacity onPress={()=>{navigate.goBack()}}>
               <Feather name="arrow-left" size={28} color="#E82041"/>
           </TouchableOpacity>
       </View>
   );
    
}
