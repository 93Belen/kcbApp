import { StyleSheet, Text, View } from "react-native"

export const ResultCard = () => {
    return <View style={styles.card}>
        <View style={styles.head}>
            <Text style={styles.h1}>Name</Text>
            <Text>Coffee</Text>
        </View>
        <Text>Women Owned</Text>
        <Text style={styles.description}>Description goes here, something like cozy coffee with frenh style deco and italian coffee blablabla</Text>
        <Text style={styles.address}>Adrress goes here lala lala Street, 34020</Text>
        <Text style={styles.link}>Websitelink.com</Text>
    </View>
}


const styles = StyleSheet.create({
    card: {
        borderWidth: 3,
        height: 350,
        marginBottom: 20,
        borderRadius: 20,
        padding: 20,
        width: '100%',
        backgroundColor: 'white',
        shadowColor: '#AA283C',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        width: '85%',
        marginVertical: 10,
        fontSize: 17,
        height: '50%'
    },
    link: {
        alignSelf: 'flex-end',
        fontSize: 15,
        color: '#AA283C',
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    address: {
        fontSize: 17,
        fontWeight: '500',
        width: '85%',
        marginVertical: 5
    }
})