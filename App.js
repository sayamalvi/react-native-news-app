import { StyleSheet, Text, View, StatusBar } from "react-native";
import InshortTab from "./components/InshortTab";
import NewsContextProvider from "./api/context";
function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <InshortTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default () => {
  return (
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  );
};
