import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { GetStarted, Login, Register, Splash } from '../pages';


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator >
             <Stack.Screen name='Splash' component={Splash} options={{ headerShown:false }} />
             <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown:false }} />
             <Stack.Screen name='Register' component={Register} options={{ title:'Register User' }} />
             <Stack.Screen name='Login' component={Login} options={{ title:'Sign In' }} />
        </Stack.Navigator>
    )
}
export default Router;