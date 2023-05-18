import { View,Text } from 'react-native'
import React, { useState} from 'react'
// import QRCodeScanner from 'react-native-qrcode-scanner'
// import { RNCamera } from 'react-native-camera'
import Counter from './src/Counter.jsx';


const App = () => {
  // const [data,setData] = useState('scan');
  return (
    <Counter/>
  )
}

export default App


{/* <QRCodeScanner>
    onRead={(data) => setData(data)}
    reactivate={true}
    reactivateTimeout={500}
    showMarker={true}
    topContent = {
      <View>
      <Text >{data}</Text>
    </View>
    }
  bottomContent={
    <View>
      <Text>
        QR code Scanner
      </Text>
    </View>
  }
  </QRCodeScanner> */}