import { Image, StyleSheet, View } from "react-native"
import { Svg, Path } from "react-native-svg"

export const Logo = () => {
    return <View>
        <Image
        style={styles.logo}
        source={require('../../images/app-logo.png')}
        />
    </View>
}

const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 69.5,
        marginBottom: 35
    }
})