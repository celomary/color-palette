import {View, Text, StyleSheet} from 'react-native'
import React from 'react';

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
      darkColor : lightColor;
}

class Box extends React.Component {

    render(){
        return <View style={[styles.container, {
            backgroundColor: this.props.hexCode,
        }]}>
            <Text style={[styles.title,
            {
                color: pickTextColorBasedOnBgColorSimple(this.props.hexCode, '#fff', '#000')
            }]}>{this.props.colorName} {this.props.hexCode}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: '2px',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
    },
    title: {
        fontSize: '16px',
        fontWeight: '600'  
    }
})

export default Box;
