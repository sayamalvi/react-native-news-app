import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import React from "react";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const SingleNews = ({ item, index }) => {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", width: windowWidth, resizeMode: "cover" }}
      />
      <View style={{ ...styles.description, backgroundColor: "#282C35" }}>
        <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
        <Text style={{ ...styles.content, color: "white" }}>
          {item.description}
        </Text>
        <Text style={{ color: "white" }}>
          Short By
          <Text> {item.author ?? "unknown"}</Text>
        </Text>
        <ImageBackground
          blurRadius={30}
          source={{ uri: item.urlToImage }}
          style={styles.footer}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: "white" }}>
              {item?.content?.slice(0, 45)}...
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  content: {
    fontSize: 10,
    paddingBottom: 10,
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  description: {
    padding: 15,
    flex: 1,
  },
});
export default SingleNews;
