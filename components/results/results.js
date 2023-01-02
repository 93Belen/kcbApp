import { Button, Modal, ScrollView, StyleSheet, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { ResultCard } from "./resultCard";
import { selectViewModal } from "../../redux/store & selectors/selectors";

export const Results = () => {
    const visible = useSelector(selectViewModal)
    const dispatch = useDispatch();
    const closeModalView = () => {
        dispatch({type: 'viewModal/changeState', payload: false})
    }
    return <Modal
      visible={visible}
      animationType='slide'
    >
    <ScrollView style={styles.resultsContainer}>
        <View style={styles.close}>
            <Button title='Close' onPress={closeModalView} color='#FABD38' />
        </View>
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
    </ScrollView>
    </Modal>
}

const styles = StyleSheet.create({
    resultsContainer: {
        paddingVertical: 100,
        paddingHorizontal: 25,
        backgroundColor: 'black'
    },
    close: {
        width: '30%',
        alignSelf: 'center',
        margin: 10
    }
})