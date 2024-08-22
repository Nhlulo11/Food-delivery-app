import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider } from './components/cartContext';
import { ThemeProvider } from './components/ThemeContext';
import { FormProvider } from './components/FormContext';

import MenuScreen from './components/MenuScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';
import Form1Screen from './components/Form1Screen';
import Form2Screen from './components/Form2Screen';
import Form3Screen from './components/Form3Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <FormProvider>
          <CartProvider>
            <Tab.Navigator>
              <Tab.Screen name="Menu" component={MenuScreen} />
              <Tab.Screen name="Cart" component={CartScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          </CartProvider>
        </FormProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
