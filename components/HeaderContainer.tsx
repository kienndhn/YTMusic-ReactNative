import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

type Props = { children: React.ReactNode; style?: StyleProp<ViewStyle> };

const HeaderContainer = ({ children, style }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[styles.container, { paddingTop: top, paddingBottom: 10 }, style]}
    >
      {children}
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
});
