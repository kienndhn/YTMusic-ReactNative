import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import CustomTabBar from "@/components/CustomTabBar";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const renderTabBar = (props: BottomTabBarProps) => (
    <CustomTabBar {...props} />
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["dark"].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
      tabBar={renderTabBar}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(setting)"
        options={{
          title: "Cài đặt",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
