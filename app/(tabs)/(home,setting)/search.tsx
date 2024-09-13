import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import SearchHeader from "@/components/SearchHeader";
import { useQuery } from "@tanstack/react-query";
import YTMusic, { SearchResult } from "ytmusic-api";
import Colors from "@/constants/Colors";
import SearchItem from "@/components/SearchItem";
import { SearchType } from "@/services/model";
import AllResult from "@/components/search_results/AllResult";

type Props = {};

const SearchScreen = (props: Props) => {
  console.log(props);

  const navigation = useNavigation();
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState<SearchType>(SearchType.All);

  const { data } = useQuery({
    queryKey: ["search", keyword],
    enabled: keyword.length > 0,
    queryFn: async () => {
      const ytMusic = new YTMusic();
      await ytMusic.initialize();
      return ytMusic.searchSongs(keyword);
    },
  });

  const renderHeader = () => <SearchHeader onSubmitKeyword={setKeyword} />;

  useEffect(() => {
    navigation.setOptions({
      header: renderHeader,
    });
  }, []);

  const renderItem: ListRenderItem<SearchResult> = ({ item }) => {
    return <SearchItem {...{ item }} />;
  };

  return (
    <View style={styles.container}>
      {searchType === SearchType.All ? (
        <AllResult result={data ?? []} />
      ) : (
        <></>
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
