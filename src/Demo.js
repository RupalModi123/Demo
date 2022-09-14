import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useEffect } from 'react/cjs/react.production.min';
import { images } from '../utils/imageuri';
import Home from './Example';



const CardDummy = ({ title, name, submodel, image, line, more, navigation }) => {
    const [expandMore, setExpandMore] = useState(true);
    const [dot, setDot] = useState(false);
    // const [ModalVisible, setModelVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);


    return (

        <View style={styles.container}>
            <View >

                <View style={styles.contain}>

                    <View style={{ marginHorizontal: 10 }}>
                        <Text>{name} </Text>
                        <Text>{submodel}</Text>
                    </View>

                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.modal}>
                        {dot == true ? (
                            <Modal isVisible={true}
                                onBackdropPress={() =>
                                    console.log("clikkldkfjasdf")}
                            //setModalVisible(true)
                            >

                                <View
                                    style={styles.back}>
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate('Home',
                                                { comingFrom: 'Home' }
                                            )
                                        }}
                                        >
                                            <Image
                                                source={images.back}

                                                style={styles.img}
                                            />
                                        </TouchableOpacity>

                                    </View>


                                    <TouchableOpacity>
                                        <Pressable

                                            onPress={() => {
                                                if (ConstantId.Token == '') {
                                                    goToLogin();
                                                    // setDot(false)
                                                    return '';
                                                }
                                                Linking.openURL(`mailto:${data.email}`);
                                            }}>
                                            <Image
                                                source={images.MailIcon}
                                                style={styles.mailImg}
                                            />
                                        </Pressable>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Pressable  //whatsapp
                                            onPress={() => {
                                                if (ConstantId.Token == '') {
                                                    goToLogin();
                                                    return '';
                                                }
                                                // initiateWhatsApp(data.whatsapp_number);
                                                initiateWhatsApp("+91963493002");
                                                console.log('initiateWhatsApp');
                                            }}>

                                            <Image
                                                source={images.whatsappCircle}
                                                style={styles.whatsappImg}
                                            />
                                        </Pressable>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Pressable
                                            onPress={() => {
                                                if (ConstantId.Token == '') {
                                                    goToLogin();
                                                    return '';
                                                }
                                                Linking.openURL(`tel:${data.contact_number}`);
                                            }}>
                                            <Image
                                                source={images.CallIcon}
                                                style={styles.callImg}
                                            />
                                        </Pressable>
                                    </TouchableOpacity>

                                </View></Modal>) : (null)}

                        <TouchableOpacity title="open" style={styles.openstyle} onPress={() => {
                            // console.log("okay presdfsdf sdfdsf ds");
                            // OkFunction()
                            setModalVisible(!isModalVisible)
                            setDot(true)
                        }} ><View><Text>"open"</Text></View></TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.carImg}
                        source={{ uri: image }}
                    ></Image>
                </View>
                <View>
                    <View style={styles.more}>
                        <View style={styles.expand}><Text numberOfLines={expandMore == true ? 3 : 1} >{line}</Text>
                        </View>
                        <TouchableOpacity style={styles.textMore} onPress={() => { setExpandMore(!expandMore) }}>
                            <Text>"more"</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 310,
        height: 310,
        width: 350,
        backgroundColor: 'white'
    },
    contain: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 7
    },
    title: {
        marginLeft: 50,
        top: 8
    },
    modal: {
        flexDirection: 'row',
        width: 310
    },
    back: {
        width: 200,
        height: 100,
        top: 300,
        left: 100,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
    },
    img: {
        marginLeft: 10,
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    mailImg: {
        marginRight: 10,
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    whatsappImg: {
        marginRight: 10,
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    callImg: {
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    openstyle: {
        marginLeft: 100, top: 10
    },
    carImg: {
        height: 210,
        width: 310,
        marginHorizontal: 20,
        marginTop: 20
    },
    more: {
        flexDirection: 'row',
        marginTop: 10,
    },
    expand: {
        backgroundColor: 'white',
        width: 350,
        paddingRight: '14%'
    },
    onelineText: {
        height: 60
    },
    textMore: {
        position: 'absolute',
        left: '85%'
    },
});
export default CardDummy;
