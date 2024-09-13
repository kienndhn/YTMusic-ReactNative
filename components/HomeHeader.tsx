import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MonoText } from "./StyledText";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import HeaderContainer from "./HeaderContainer";

type Props = {};

const HomeHeader = (props: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <HeaderContainer style={[styles.container]}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: Colors["dark"].text, fontWeight: "700" }}>
          Music
        </Text>
      </View>
      <View style={styles.groupButton}>
        <Ionicons
          name="notifications-outline"
          color={Colors["dark"].tabIconSelected}
          size={25}
        />
        <Ionicons
          name="search-outline"
          color={Colors["dark"].tabIconSelected}
          size={25}
          onPress={() => router.navigate("/search")}
        />
        <Ionicons
          name="person-circle-outline"
          color={Colors["dark"].tabIconSelected}
          size={25}
        />
      </View>
    </HeaderContainer>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  groupButton: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    gap: 20,
  },
});
