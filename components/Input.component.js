import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';


const Input = ({label, value, onChange}) => {
    return <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput value={value} onChange={onChange} style={
            styles.input
        }
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width * 0.9,
        marginHorizontal: Dimensions.get('screen').width * 0.05,
        marginBottom: 15
    },
    label: {
        fontSize: '16px',
        fontWeight: '400',
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        fontSize: '16px',
        fontWeight: '400',
        borderRadius: '5px',
    }
});

export default Input;