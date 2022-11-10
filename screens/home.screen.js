import {View,  Text, StyleSheet, Dimensions, FlatList, TouchableWithoutFeedback} from 'react-native';
import HomeColor from '../components/homeColor.component';
import {useState, useEffect } from 'react';



const Home = ({route, navigation}) => {
    const [palettes, setPalettes] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchPalettes = async () => {
        const resp = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
        const data = await resp.json();
        setPalettes(data);
        setLoading(false);
        return true;
    }
    
    useEffect(()=>{
        fetchPalettes();
    }, []);

    useEffect(()=>{
        if (route.params?.paletteName)
        {
            setPalettes(state => [{id:state.length + 1,...route.params},...state]);
        }
    }, [route.params]);
    return <View >
        
        <TouchableWithoutFeedback onPress={
            ()=>{
                navigation.navigate('Modal');
            }
        }>
            <View style={[styles.list]}>
                <Text style={
                    styles.text
                }>Add A Color Scheme</Text>
            </View>
        </TouchableWithoutFeedback>
        <FlatList
        refreshing={loading}
        style={{
            marginBottom: 80
        }}
        onRefresh={()=> {
            setPalettes([]);
            setLoading(true);
            fetchPalettes();
        }}
        contentContainerStyle={styles.list}
        data={palettes}
        renderItem={
            ({item})=>{
                return <HomeColor title={item.paletteName} colors={item.colors} key={item.id} navigation={navigation} />
        }
        }
        keyExtractor={
            (item, index) => item.id
        }
        ItemSeparatorComponent={
            () => {
                return <View style={{height: 10}} />
            }
        }
    />
    </View>
}

const styles = StyleSheet.create({
    list: {
        width: Dimensions.get('screen').width * 0.9,
        paddingHorizontal: Dimensions.get('screen').width * 0.025,
    },
    text: {
        fontSize: '18px',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#00a0b0",
        fontWeight: '600',
        color: '#00a0b0',
        paddingVertical: 20
    }
})
export default Home;