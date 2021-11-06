import * as Localization from 'expo-localization';

import { StatusBar, View } from 'react-native';

import React from 'react';
import { StartScreen } from './src/screens/Start';
import en from './src/i18n/en/common';
import i18n from 'i18n-js';

i18n.translations = {
    en
};

i18n.fallbacks = true;
i18n.locale = Localization.locale;

const App = () => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <StatusBar barStyle="light-content" />
            <StartScreen />
        </View>
    );
};

export default App;
