import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="profile"
        options={{ title: "Profile", presentation: "modal" }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
