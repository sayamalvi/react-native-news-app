import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../api/context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";
const NewsScreen = () => {
  const {
    // Take out articles from news object
    news: { articles },
  } = useContext(NewsContext);
  const layout = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState();
  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={layout.height}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "black",
  },
});
export default NewsScreen;
