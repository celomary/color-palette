import {Switch, View, Text, StyleSheet} from 'react-native';


const SwitchInput = ({color, selectedColors, colorHandler}) => {
    return <View style={styles.container}>
        <Text>{color.colorName}</Text>
        <Switch
            value={!!selectedColors.find((item)=>item.colorName === color.colorName)}
            onValueChange={(value) => {
                if (value)
                {
                    colorHandler(state => [...state, color]);
                }
                else
                {
                    colorHandler(state => state.filter(c => c.colorName !== color.colorName));
                }
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default SwitchInput;