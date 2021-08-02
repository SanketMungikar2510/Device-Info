import React, {useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [deviceId, setDeviceId] = useState('Click below to get unique Id');
  const [Batterylevel, setBatterylevel] = useState(
    'Click below to get Battery Level',
  );
  const [isBatteryCharging, setBatteryCharging] = useState('Battery Status');
  const [maxMemory, setMaxMemory] = useState('Max Memory');

  const getDeviceId = () => {
    var uniqueId = DeviceInfo.getUniqueId();
    setDeviceId(uniqueId);
  };
  const getBatteryLevel = () => {
    DeviceInfo.getBatteryLevel().then(result => {
      setBatterylevel(result);
    });
  };
  const getIsBatteryCharging = () => {
    DeviceInfo.isBatteryCharging().then(isCharging => {
      console.log('Battery-status', isCharging);
      setBatteryCharging(isCharging + '');
    });
  };
  const getMaxMemory = () => {
    DeviceInfo.getMaxMemory().then(ismaxMemory => {
      setMaxMemory(ismaxMemory);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titlestyle}>React Native DeviceInfo Example</Text>
        <Text style={styles.textstyle}>DEVICE-ID:{deviceId}</Text>
        <TouchableOpacity onPress={getDeviceId} style={styles.buttonstyle}>
          <Text>SHOW ME THE UNIQUE ID OF DEVICE</Text>
        </TouchableOpacity>

        <Text style={styles.textstyle}>BATTERY-LEVEL:{Batterylevel * 100}</Text>

        <TouchableOpacity onPress={getBatteryLevel} style={styles.buttonstyle}>
          <Text>SHOW ME THE BATTERY LEVEL OF DEVICE</Text>
        </TouchableOpacity>

        <Text style={styles.textstyle}>BATTERY-STATUS:{isBatteryCharging}</Text>

        <TouchableOpacity
          onPress={getIsBatteryCharging}
          style={styles.buttonstyle}>
          <Text>SHOW ME THE STAUTS OF THE BATTERY</Text>
        </TouchableOpacity>

        <Text style={styles.textstyle}>MAX-MEMORY:{maxMemory}</Text>

        <TouchableOpacity onPress={getMaxMemory} style={styles.buttonstyle}>
          <Text>SHOW ME MAX MEMORY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5bdeca',
  },
  titlestyle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  buttonstyle: {
    backgroundColor: 'pink',
    padding: 10,
    alignItems: 'center',
  },
  textstyle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    padding: 20,
    color: '#f00',
  },
});

export default App;
