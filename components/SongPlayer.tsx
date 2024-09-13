import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSongStore } from "@/stores/song.store";
import { useQuery } from "@tanstack/react-query";
import YTMusic from "ytmusic-api";

type Props = {};

const SongPlayer = (props: Props) => {
  const { songId } = useSongStore();
  const { data } = useQuery({
    queryKey: ["song", songId],
    queryFn: async () => {},
    enabled: !!songId,
  });

  return <View></View>;
};

export default SongPlayer;

const styles = StyleSheet.create({});
