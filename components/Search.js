import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../api/context";
import { Entypo } from "@expo/vector-icons";
import SingleNews from "./SingleNews";
const Search = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();
  const handleSearch = (text) => {
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(articles.filter((query) => query.title.includes(text)));
  };
  const handleModal = (res) => {
    setModalVisible(true);
    setCurrentNews(res);
  };
  return (
    <View style={{ width: "100%", position: "relative" }}>
      <TextInput
        onChangeText={(text) => handleSearch(text)}
        placeholder="Search"
        placeholderTextColor={"white"}
        style={{ ...styles.search, backgroundColor: "black", color: "white" }}
      />
      <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map((res) => (
          <TouchableOpacity
            key={res.title}
            activeOpacity={0.7}
            onPress={() => handleModal(res)}
          >
            <Text
              style={{
                ...styles.singleResult,
                backgroundColor: "black",
                color: "white",
              }}
            >
              {res.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            margin: 20,
          }}
        >
          <Entypo name="circle-with-cross" size={30} color="white" />
        </TouchableOpacity>
        <View style={{ height: "100%", transform: [{ scaleY: -1 }] }}>
          <SingleNews item={currentNews} />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResults: {
    position: "absolute",
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: "black",
    elevation: 5,
  },
});
export default Search;
