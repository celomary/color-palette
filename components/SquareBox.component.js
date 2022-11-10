import {View, StyleSheet} from 'react-native';
import React from 'react';



class SquareBox extends React.Component {

    render () {
        return <View style={[styles.container, {
            backgroundColor: this.props.color
        }]}>
        </View>
    }
}

const styles = StyleSheet.create({
   container: {
       width: 50,
       height: 50,
       shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
   },
});

export default SquareBox;