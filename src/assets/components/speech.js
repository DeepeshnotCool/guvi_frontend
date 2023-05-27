

import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useRef } from 'react';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { Audio } from 'expo-av';


export default function Speech() {
  const [hasPermission, setHasPermission] = React.useState();
  const [faceData, setFaceData] = React.useState([]);
  //const [currentWord, setCurrentWord] = React.useState('apple');
  //const [score, setScore] = React.useState(0);
  const recognitionRef = useRef('');

  const [recording, setRecording] = React.useState();
  const [sound, setSound] = React.useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HighQuality
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    const { sound: newSound } = await Audio.Sound.createAsync({ uri });
    setSound(newSound);
  }

  async function playRecording() {
    console.log('Playing recording..');
    await sound.playAsync();
  }

  React.useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);



  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const getFaceDataView = () => {
    const latestFaceData = faceData[faceData.length - 1];
    if (!latestFaceData) {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>No faces :(</Text>
        </View>
      );
    } else {
      const eyesShut = latestFaceData.rightEyeOpenProbability < 0.4 && latestFaceData.leftEyeOpenProbability < 0.4;
      const winking = !eyesShut && (latestFaceData.rightEyeOpenProbability < 0.4 || latestFaceData.leftEyeOpenProbability < 0.4);
      const smiling = latestFaceData.smilingProbability > 0.7;
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>Eyes Shut: {eyesShut.toString()}</Text>
          <Text style={styles.faceDesc}>Winking: {winking.toString()}</Text>
          <Text style={styles.faceDesc}>Smiling: {smiling.toString()}</Text>
          {/* <Text style={styles.faceDesc}>Score: {score}</Text> */}
        </View>
      );
    }
  }

  const handleFacesDetected = ({ faces }) => {
    setFaceData(faces.map(face => {
      const eyesShut = face.rightEyeOpenProbability < 0.4 && face.leftEyeOpenProbability < 0.4;
      const winking = !eyesShut && (face.rightEyeOpenProbability < 0.4 || face.leftEyeOpenProbability < 0.4);
      const smiling = face.smilingProbability > 0.7;
      return { ...face, eyesShut,winking, smiling };
    }));
    };
    
    return (
    <View style={styles.container}>
      
    <Camera
    
    style={styles.camera}
    type={Camera.Constants.Type.front}
    onFacesDetected={handleFacesDetected}
    faceDetectorSettings={{
    mode: FaceDetector.FaceDetectorMode.fast,
    detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
    runClassifications: FaceDetector.FaceDetectorClassifications.all,
    minDetectionInterval: 100,
    tracking: true,
    }}
    />
     <View style={styles.buttonContainer}>
    <Button
      title={recording ? 'Stop Recording' : 'Start Recording'}
      onPress={recording ? stopRecording : startRecording}
    />
    {sound && (
      <Button
        title="Play Recording"
        onPress={playRecording}
      />
    )}
  </View>


    {getFaceDataView()}
    </View>
    );
    }
    
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    camera: {
    flex: 1,
    width: '100%',
    },
    faces: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#000',
    opacity: 0.8,
    borderRadius: 5,
    },
    faceDesc: {
    color: '#fff',
    marginBottom: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      bottom: 130,
      left: 0,
      right: 0,
    },
    
    });
    