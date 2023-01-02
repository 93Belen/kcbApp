import { View, StyleSheet, Text, Pressable } from "react-native"
import { useDispatch } from "react-redux"

export const Card = () => {
    const dispatch = useDispatch();

    const showModal = () => {
        dispatch({type: 'viewModal/changeState', payload: true})
    }


    return <View style={styles.card}>
    <Pressable
        onPress={showModal}
        style={({pressed}) => pressed ? styles.pressed : styles.pressable}
        android_ripple={styles.androidRipple}
    >
            <Text style={styles.text}>Food in KC</Text>
    </Pressable>
    </View>
}

const styles = StyleSheet.create({
    card: {
        height: 125,
        width: '40%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: '5%',
        zIndex: 3,
        position: 'relative',
        shadowColor: '#AA283C',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
        justifyContent: "center"
    },
    img: {
        height: 125,
        width: '100%',
        borderRadius: 20,
        zIndex: 0,
        position: "absolute"
    },
    text: {
        fontSize: 28,
        position: 'relative',
        zIndex: 5,
        alignSelf: 'center',
        fontWeight: 'bold',
        width: 100,
        textAlign: 'center'
    },
    androidRipple: {
        color: 'rgba(170, 40, 60, 0.3)',
        radius: 60
    },
    pressable: {
        height: '100%',
        justifyContent: "center",
        borderRadius: 20
    },
    pressed: {
        position: 'relative',
        left: 2,
        top: 4
    }
})