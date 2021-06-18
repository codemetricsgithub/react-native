import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Scrollviews from './pages/Scrollviews';
import Absolutefill from './stylesheets/Absolutefill';
import StylesheetCompose from './stylesheets/StylesheetCompose';
import StylesheetFlatten from './stylesheets/StylesheetFlatten';
import Absolutefillobj from './stylesheets/Absolutefillobj';
import Buttonex from './buttons/Button';
import SwitchToggle from './switches/SwitchToggle';
import Flatlist from './flatlist/Flatlist';

const index = () => {
  return (
    <>
      {/* <Scrollviews />
      <StylesheetFlatten />
      <StylesheetCompose />
      <Absolutefill /> */}
      {/* <Absolutefillobj />
      <Hairlinewidth /> */}
      {/* <Buttonex />
      <SwitchToggle /> */}
      <Flatlist />
    </>
  );
};

export default index;
