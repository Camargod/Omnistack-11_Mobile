import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';
import {Feather} from '@expo/vector-icons'

import logoImg from '../../assets/logo.png';
import Header from '../header';

import api from '../../services/api';

export default function Incidents()
{
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=>
    {
        loadIncidents();
    },[]);

    async function loadIncidents()
    {
        await api.get('/incidents',{
            headers:
            {

            }
        }).then(e=>
        {
            setIncidents(e.data);
            setTotal(e.headers['X-Total-Count']);
        });
    }
    const navigation = useNavigation();

    function navigateToDetail()
    {
        navigation.navigate('Detail');
    }

    return (
    <View style={styles.container}>
        <Header casos={total}/>

        <Text style={styles.title}>
            Seja bem vindo!
        </Text>
        <Text style={styles.description}>
            Escolha um dos casos abaixo e salve o dia!
        </Text>

        <FlatList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        style={styles.incidentList}
        renderItem={({item:incident})=>
        (
            <View style= {styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{
                    Intl.NumberFormat('pt-br',
                    {
                        style:'currency',
                        currency:'BRL'
                    }).format(incident)}
                </Text>

                <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                    <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
                    <Feather name="arrow-right" size={16} color="#E02041"/>
                </TouchableOpacity>
            </View>
        )}
        />

        
    </View>
    )
}
