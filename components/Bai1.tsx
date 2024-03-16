import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function App() {
  const translateY = useSharedValue(0);

  const handlePress = () => {
    translateY.value += Math.random() * 100; // Giá trị ngẫu nhiên trong khoảng từ 0 đến 300
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value) }],
  }));

  return (
    <>
      <View style={styles.container}>
        <Button onPress={handlePress} title="MOVE" />
      </View>
      <Animated.View style={[styles.box, animatedStyles]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    width: 100,
    alignSelf: 'center',
  },
});
