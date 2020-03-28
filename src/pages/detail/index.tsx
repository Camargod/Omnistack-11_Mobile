import React from 'react';
import {View, Text, Linking} from 'react-native';
import {FontAwesome, Feather} from '@expo/vector-icons';
import styles from './styles';
import Header from '../header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MailComposer from 'expo-mail-composer';

export default function Detail()
{
    const sendMessage =  "Olá 'ONG', estou entrando em contato pois gostaria de ajudar no caso 'Caso' com o valor de 'valor'";
    function sendMail()
    {
        MailComposer.composeAsync(
            {
                subject: 'Herói do caso: Cadela manca',
                recipients: ['gabrielsilmargo@hotmail.com'],
                body:sendMessage
            }
        )
    }
    function vemDeZap()
    {
        Linking.openURL(`whatsapp://send?phone=5511970770221&text=${sendMessage}`);
    }
    return (

        <View style={styles.container}>
            <Header hasBackButton={true} lastPage='Incidents'/>

            <View style= {styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>PUTA MANCANDO</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>
                        Salve o dia!
                </Text>
                <Text style={styles.heroTitle}>
                    Seja o herói desse caso!
                </Text>
                <Text style={styles.heroDescription}>
                    Entre em contato:
                </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionWpp} onPress={()=>{vemDeZap()}}>
                        <FontAwesome name="whatsapp" style={styles.actionTextWpp}></FontAwesome>
                        <Text style={styles.actionTextWpp}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionEmail} onPress={()=>{sendMail()}}>
                        <Feather name="mail" style={styles.actionTextEmail}/>
                        <Text style={styles.actionTextEmail}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        

    )
}
