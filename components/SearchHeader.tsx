import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import HeaderContainer from "./HeaderContainer";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";

type Props = {
  onSubmitKeyword: (value: string) => void;
};

const SearchHeader = ({ onSubmitKeyword }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { keyword: "" },
  });

  const onSubmit = (data: { keyword: string }) => {
    onSubmitKeyword(data.keyword);
  };

  return (
    <HeaderContainer style={styles.container}>
      <Ionicons
        name="chevron-back"
        color={Colors.dark.tabIconSelected}
        size={30}
        onPress={() => router.back()}
      />
      <Controller
        control={control}
        name="keyword"
        render={({ field: { value, onChange } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.text}
              onSubmitEditing={handleSubmit(onSubmit)}
              returnKeyType="search"
              enablesReturnKeyAutomatically
            />
          </View>
        )}
      />
    </HeaderContainer>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  inputContainer: {
    backgroundColor: "#2a2a2a",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  text: {
    color: Colors.dark.text,
    paddingVertical: 0,
  },
});
