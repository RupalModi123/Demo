import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

// const Card = ({}) => {
    const Card = ({item,index}) => {
        const [store, setStore] = useState(false);
        const [dot, setDot] = useState(false);
        const [isModalVisible, setModalVisible] = useState(false);
      
    return(
        <View style={{ marginVertical: '2%', borderBottomWidth: 1, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ top: 30 }}>


                <Text>hii rupal  </Text>
                <Text>{item.name}</Text>
                <Text>{item.subname}</Text></View>
            <View style={{ top: 35, marginLeft: 80 }}><Text>{item.place}</Text></View>
        </View>
        <TouchableOpacity style={styles.openstyle}
            onPress={() => {
                // OkFunction()
                setModalVisible(!isModalVisible)
                setDot(true)
            }}
        >
            <Text >{item.data}</Text></TouchableOpacity>
        <SwiperFlatList>
            <View style={[styles.child, { flexDirection: "row", }]}>

                <Image source={{ uri: item.uri }} style={{
                    width: 350,
                    height: 200,
                    borderColor: '#d35647',
                    resizeMode: 'contain',
                    borderBottomWidth: 1
                }} />

            </View>


            <Image source={{ uri: item.uri }} style={{
                width: 350,
                height: 200,
                borderColor: '#d35647',
                resizeMode: 'contain',
                borderBottomWidth: 10,
                borderColor: "red"
            }} />
            <Image source={{ uri: item.uri }} style={{
                width: 350,
                height: 200,
                borderColor: '#d35647',
                resizeMode: 'contain',
                borderBottomWidth: 1
            }} />
            <Image source={{ uri: item.uri }} style={{
                width: 350,
                height: 200,
                borderColor: '#d35647',
                resizeMode: 'contain',
                borderBottomWidth: 1
            }} />

            <Image source={{ uri: item.uri }} style={{
                width: 350,
                height: 200,
                borderColor: '#d35647',
                resizeMode: 'contain',
                // margin:8
            }} />
        </SwiperFlatList>
        <View>
            <View style={styles.more}>
                <View style={styles.expand}><Text numberOfLines={item.isExpanded == true ? 3 : 1} >{item.dummy}</Text>
                </View>
                <TouchableOpacity style={styles.textMore}
                    onPress={() => moreButtonClick(item,index)}>
                    <Text>{item.demo}</Text>
                </TouchableOpacity>
            </View>
        </View>
  
    </View>
    )
}

const styles = StyleSheet.create({

});
export default Card;