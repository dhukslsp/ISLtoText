import { Image, StyleSheet, Platform, Text, Dimensions, StatusBar, View, Button, TouchableOpacity, TextInput,Pressable } from 'react-native';
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
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');
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
            <View
              style={{ flex: 0.2, alignItems: "center" }}
            >
              <TouchableOpacity style={{}} onPress={toggleCameraFacing}>
                <TabBarIcon name={'camera-reverse'} />
              </TouchableOpacity>
              <ThemedText type='defaultSemiBold' >Converted text</ThemedText>
              <Text style={{ textAlign: "left", paddingTop: 20, fontSize: 20 }}>Hello i am ankur i live in South Delhi</Text>
            </View>
            <View style={{ flex: .8, flexDirection: "row", alignItems: "flex-start" }}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter the text to be translated"
                keyboardType="default"
              />
              <Pressable style={styles.button} onPress={()=>{alert("The text has been send")}}>
                <Text style={{fontSize:20,color:'black'}}>Send text</Text>
              </Pressable>
              </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "64%",
    display: "inline",
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  camera: {
    flex: 1
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop:30
    
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
    flex: 1
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  }
});
