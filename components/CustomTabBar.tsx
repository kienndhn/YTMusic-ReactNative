import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabBar, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSongStore } from "@/stores/song.store";
import SongPlayer from "./SongPlayer";

const CustomTabBar = (props: BottomTabBarProps) => {
  const { songId } = useSongStore();

  return (
    <View>
      {songId && <SongPlayer />}
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({});
