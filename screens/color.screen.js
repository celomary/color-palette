import {View, FlatList, Dimensions} from 'react-native';
import Box from '../components/Box.component';



const ColorScreen = ({route}) => {
    return <View>
        <FlatList 
            contentContainerStyle={styles.container}
            data={route.params.colors}
            renderItem={
                ({item})=>{
                    return <Box {...item} />
                }
            }
            keyExtractor={
                (item, index) => item.hexCode + index
            }
            ItemSeparatorComponent={
                ()=>{
                    return <View 
                        style={
                            {
                                height: 10
                            }
                        }
                    />
                }
            }
        />
    </View>
}

const styles = {
    container: {
        width:  Dimensions.get('screen').width * 0.9,
        marginHorizontal: Dimensions.get('screen').width * 0.05,
        paddingVertical: 20,
    }
}
export default ColorScreen;
