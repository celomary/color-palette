import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet, FlatList} from 'react-native';
import SquareBox from './SquareBox.component'

class HomeColor extends React.Component {
    render () {

        return <TouchableWithoutFeedback onPress={()=>{
            this.props.navigation.navigate('Color', {
                colors: this.props.colors,
                title: this.props.title
            })
        }}>
            <View style={styles.container} >
                <Text style={[styles.title]}>
                    {this.props.title}
                </Text>
                <FlatList
                    data={this.props.colors.slice(0, 5)}
                    keyExtractor={(item, index) => item + index}
                    renderItem={
                        ({item, index})=>{
                            return <SquareBox color={item.hexCode} />
                        }
                    }
                    ItemSeparatorComponent={
                        ()=>{
                            return <View style={{
                                width: 10
                            }} />
                        }
                    }
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
            </View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: '18px',
        fontWeight: '800',
        color: '#121212',
        marginBottom: 10
    },
    container: {
        marginTop: 20,
    }
});

export default HomeColor;