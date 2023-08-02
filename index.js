/**
 * @format
 */
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
import mainView from './Views/mainViews';

AppRegistry.registerComponent(appName, () => mainView);


