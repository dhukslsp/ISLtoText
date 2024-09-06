import { Image, StyleSheet, Platform, Text, Dimensions, StatusBar,View } from 'react-native';
import { useRef, useCallback, useMemo } from 'react';
import { HelloWave } from '@/components/HelloWave';
// import { Bottom } from '@/components/AppComponents/Bottomsheet';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Camera } from 'expo-camera';
export default function HomeScreen() {
  //Code for adding the Scroll View in our App basic configurations
  const sheetStartSnap = 200;
  const { height: windowHeight } = Dimensions.get('window');
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { top, bottom } = useSafeAreaInsets();
  const sheetEndSnap = windowHeight - (top + bottom + statusBarHeight);
  const snapPoints = useMemo(() => [sheetStartSnap, sheetEndSnap], [sheetEndSnap]);
  //End in code for adding Scroll view
  //Basic code for having camera in our app
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <>
    <View><Text>Thisi s s</Text></View>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}
        >
          <BottomSheetView style={styles.contentContainer}>
            <ThemedText type='defaultSemiBold' >The text generated Will be shown here</ThemedText>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
      </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
