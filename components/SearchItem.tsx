import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SearchResult, SongDetailed } from "ytmusic-api";

type Props = {
  item: SearchResult;
};

const SearchItem = ({ item }: Props) => {
  return (
    <View>
      <Image
        source={{
          uri: item.thumbnails[0].url,
        }}
        style={{
          width: 50,
          height: 50,
        }}
      />
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({});
