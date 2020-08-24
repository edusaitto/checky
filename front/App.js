import React from 'react';
import Home from './src/views/Home';
import Task from './src/views/Task';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

console.disableYellowBox = true;

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);

export default function App() {
  return (
    <Routes/>
  )
};
