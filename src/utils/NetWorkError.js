import React from 'react';
import { View, Image, Text, Dimensions, Modal } from 'react-native';
import { Icon } from 'native-base';
var deviceWidth = (Dimensions.get('window').width);
var deviceHeight = (Dimensions.get('window').height);
import {ConstantId} from './AppManager';

const NetWorkError = ({ message = 'Connection Error', subMessage = "You must connect to a Wi-Fi or mobile network, please check your connection" }) => {
    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
        >
            <View style={inlinestyle.container}>
                <Icon name='wifi' type='Ionicons' style={{ fontSize: 300, color: 'red' }} />
                <Text style={inlinestyle.textStyle}>{message}</Text>
                <Text style={inlinestyle.subTextStyle}>{subMessage}</Text>

            </View>
        </Modal>
    );
}

const inlinestyle = {
    containerBackgroundColor: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: deviceHeight, width: deviceWidth, backgroundColor: '#ffffff',
    },
    textStyle: {
        fontSize: 25, color: 'blue', marginBottom: 5, marginTop: 20, textAlign: 'center', fontFamily: ConstantId.fontMedium, 
    },
    subTextStyle: {
        fontSize: 20, color: 'back',alignSelf: 'center', textAlign: 'center', top: 20, width: deviceWidth - 100, height: 150, fontFamily: ConstantId.fontRegular, 
    }
}

export { NetWorkError };
