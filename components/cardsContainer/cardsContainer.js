import { View, StyleSheet } from "react-native"
import { Card } from "../card/card"

export const CardsContainer = () => {
    return (
        <View style={styles.cardsContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </View>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        flexWrap: 'wrap',
        width: '100%',
        alignContent: 'space-between',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
})