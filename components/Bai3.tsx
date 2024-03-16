
import * as React from 'react';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from '../navigation/AppNavigator';

export default function App() {
  

  return(
    <SafeAreaProvider><AppNavigator /> </SafeAreaProvider>
  );
}
