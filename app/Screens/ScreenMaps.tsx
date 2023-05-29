import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ScreenMaps = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingHorizontal: insets.right,
      }}>
      <Text>ScreenMaps</Text>
    </View>
  );
};

export default ScreenMaps;
