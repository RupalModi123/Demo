import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useEffect } from 'react/cjs/react.production.min';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Card from './src/Card';
const App = ({title, name, submodel, image, line, more, navigation}) => {
    const [store, setStore] = useState(false);
    const [dot, setDot] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
   const [DATA,setDATA] = useState([
    {
        id: 1,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        isExpanded: false,
    },
    {
        id: 1,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
    {
        id: 1,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
    {
        id: 1,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
    {
        id: 1,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
    {
        id: 1,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
    {
        id: 2,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
    {
        id: 3,
        name: "panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
    {
        id: 4,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
    {
        id: 5,
        name: "Panamera",
        subname: "submodel",
        place: "location",
        data: "open",
        demo: "more",
        uri: "https://app.wattscar.com/CarImages//1615287796_66new2.jpg",
        dummy: "You can take the mock theory test in differently styled views. Both of them work on most desktops, laptops, mobiles and tablets",
        isExpanded: false,
    },
])

    
    const moreButtonClick = (item,index) => {
        // (item.isExpanded == !item.isExpanded, setStore(!store))
        console.log("DATA[index].isExpanded", DATA[index].isExpanded);
        DATA[index].isExpanded = !(DATA[index].isExpanded)
        setStore(!store)
    }
    return(
        <View style={styles.container}>
        <View>
            <View style={styles.contain}>
                <View style={{ marginHorizontal: 10 }}>
                    {/* <Text>  Panamera </Text>
                    <Text>submodel</Text> */}
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

                </View>
            </View>
            <View>
            </View>
        </View>
        <View style={{ backgroundColor: "#EEE", }}>
            <Text></Text>
            <View >
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({item,index}) => {
                        
                        // console.log('index : ', index)
                        return (
                            <Card/>
                            // <View style={{ marginVertical: '2%', borderBottomWidth: 1, backgroundColor: '#fff' }}>
                            //     <View style={{ flexDirection: 'row' }}>
                            //         <View style={{ top: 30 }}>
                            //             <Text>{item.name}</Text>
                            //             <Text>{item.subname}</Text></View>
                            //         <View style={{ top: 35, marginLeft: 80 }}><Text>{item.place}</Text></View>
                            //     </View>
                            //     <TouchableOpacity style={styles.openstyle}
                            //         onPress={() => {
                            //             // OkFunction()
                            //             setModalVisible(!isModalVisible)
                            //             setDot(true)
                            //         }}
                            //     >
                            //         <Text >{item.data}</Text></TouchableOpacity>
                            //     <SwiperFlatList>
                            //         <View style={[styles.child, { flexDirection: "row", }]}>

                            //             <Image source={{ uri: item.uri }} style={{
                            //                 width: 350,
                            //                 height: 200,
                            //                 borderColor: '#d35647',
                            //                 resizeMode: 'contain',
                            //                 borderBottomWidth: 1
                            //             }} />

                            //         </View>


                            //         <Image source={{ uri: item.uri }} style={{
                            //             width: 350,
                            //             height: 200,
                            //             borderColor: '#d35647',
                            //             resizeMode: 'contain',
                            //             borderBottomWidth: 10,
                            //             borderColor: "red"
                            //         }} />
                            //         <Image source={{ uri: item.uri }} style={{
                            //             width: 350,
                            //             height: 200,
                            //             borderColor: '#d35647',
                            //             resizeMode: 'contain',
                            //             borderBottomWidth: 1
                            //         }} />
                            //         <Image source={{ uri: item.uri }} style={{
                            //             width: 350,
                            //             height: 200,
                            //             borderColor: '#d35647',
                            //             resizeMode: 'contain',
                            //             borderBottomWidth: 1
                            //         }} />

                            //         <Image source={{ uri: item.uri }} style={{
                            //             width: 350,
                            //             height: 200,
                            //             borderColor: '#d35647',
                            //             resizeMode: 'contain',
                            //             // margin:8
                            //         }} />
                            //     </SwiperFlatList>
                            //     <View>
                            //         <View style={styles.more}>
                            //             <View style={styles.expand}><Text numberOfLines={item.isExpanded == true ? 3 : 1} >{item.dummy}</Text>
                            //             </View>
                            //             <TouchableOpacity style={styles.textMore}
                            //                 onPress={() => moreButtonClick(item,index)}>
                            //                 <Text>{item.demo}</Text>
                            //             </TouchableOpacity>
                            //         </View>
                            //     </View>
                          
                            // </View>
                        )
                    }}
                />
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        flex: 1,
        width: 350,
        backgroundColor: 'white'
    },
    contain: {
        flexDirection: 'row',
        // borderBottomWidth: 1,
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
    openstyle: {
        marginLeft: 100, top: 10
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
        marginLeft: 300, top: 10,
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
        // backgroundColor: 'white',
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
export default App;