
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Logo } from './components/logo/logo';
import { CardsContainer } from './components/cardsContainer/cardsContainer';
import { Results } from './components/results/results';
import { Provider } from 'react-redux';
import store from './redux/store & selectors/store'

export default function App() {
  return (
    <Provider store={store}>
    <ScrollView style={styles.container}>
      <Logo />
      <CardsContainer />
      <Results />
    </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingTop: 80,
    paddingHorizontal: 20,
    color: 'white',
    width: '100%'
  },
});
