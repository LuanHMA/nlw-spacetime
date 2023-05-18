import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-red-500 flex-1 items-center justify-center ">
      <Text className="text-zinc-50 font-bold text-5xl">Hello, World</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}