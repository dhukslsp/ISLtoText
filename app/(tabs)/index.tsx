import { Image, StyleSheet, Platform, Text, Dimensions, StatusBar, View, Button, TouchableOpacity } from 'react-native';
import { useRef, useCallback, useMemo, useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
// import { Bottom } from '@/components/AppComponents/Bottomsheet';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Camera } from 'expo-camera';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
export default function HomeScreen() {
  //Code for adding the Scroll View in our App basic configurations
  const sheetStartSnap = 200;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const sheetEndSnap = 600;
  const snapPoints = useMemo(() => [sheetStartSnap, sheetEndSnap], [sheetEndSnap]);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  //End in code for adding Scroll view
  //Basic code for having camera in our app
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // callbacks
  
  return (
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
        <CameraView style={styles.camera} facing={facing}>
          
        </CameraView>
      
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}
        >
          <BottomSheetView style={styles.contentContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <TabBarIcon name={ 'camera-reverse'} />
            </TouchableOpacity>
            <ThemedText type='defaultSemiBold' >Converted text</ThemedText>
            <Text style = {{textAlign:"left", paddingTop:20}}>Hello i am ankur i love in South Delhi</Text>
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
  camera: {
    flex:1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  button: {
    height:40,
    // backgroundColor:'black'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  }
});
