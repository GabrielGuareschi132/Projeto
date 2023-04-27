import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View,  } from 'react-native';

export default props=>{
    <View style={styles.display}>
        <Text
            style={styles.TxtDisplayOperacao}
            numberOfLines={1}
        >{props.valor}
        </Text>

        <Text
            style={styles.TxtDisplayRes}
            numberOfLines={1}
        >{props.res}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#444',
        width: '100%'
    },
    
    TxtDisplayRes: {
        fontSize: 50,
        color: '#fff'
    },

    TxtDisplayOperacao: {
        fontSize: 25,
        color: '#fff'
    },
})
