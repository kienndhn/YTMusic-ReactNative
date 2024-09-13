import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import HomeHeader from "@/components/HomeHeader";
import Colors from "@/constants/Colors";

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation();

  const renderHeader = () => <HomeHeader />;
  useEffect(() => {
    navigation.setOptions({
      header: renderHeader,
    });
  }, []);

  return (
    <View>
      <Text
        style={{
          color: Colors["dark"].text,
        }}
      >
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
