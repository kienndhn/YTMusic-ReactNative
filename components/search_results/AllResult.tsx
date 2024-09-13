import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useMemo } from "react";
import {
  AlbumBasic,
  ArtistBasic,
  ArtistDetailed,
  SearchResult,
  SongDetailed,
  VideoDetailed,
} from "ytmusic-api";
import Colors from "@/constants/Colors";
import { useSongStore } from "@/stores/song.store";

type Props = { result: SearchResult[] };

const AllResult = ({ result }: Props) => {
  console.log(result.map((r) => r.type));

  const { artistes, songs, albums, videos } = useMemo<{
    artistes: ArtistDetailed[];
    songs: SongDetailed[];
    albums: AlbumBasic[];
    videos: VideoDetailed[];
  }>(() => {
    return {
      artistes: result.filter((r) => r.type === "ARTIST"),
      songs: result.filter((r) => r.type === "SONG"),
      albums: result.filter((r) => r.type === "ALBUM"),
      videos: result.filter((r) => r.type === "VIDEO"),
    };
  }, [result]);

  const { setSong } = useSongStore();

  return (
    <ScrollView>
      <Text>Nghệ sĩ</Text>
      {artistes.map((a) => (
        <View key={a.artistId}>
          <Image
            source={{
              uri: a.thumbnails[0].url,
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text style={{ color: Colors.dark.text }}>{a.name}</Text>
        </View>
      ))}
      <Text>Bài hát</Text>
      {songs.map((song) => (
        <Pressable
          onPress={() => {
            setSong(song.videoId);
          }}
          key={song.videoId}
        >
          <Image
            source={{
              uri: song.thumbnails[0].url,
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text>{song.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default AllResult;

const styles = StyleSheet.create({});
