import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const appStack = createStackNavigator();

import Incidents from '../pages/incidents';
import Detail from '../pages/detail';

export default function Routes()
{
    let appStackScreenOptions =
    {
        headerShown:false
    }

    return(
        <NavigationContainer>
            <appStack.Navigator screenOptions={appStackScreenOptions}>
                <appStack.Screen name="Incidents" component={Incidents}/>
                <appStack.Screen name="Detail" component={Detail}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}