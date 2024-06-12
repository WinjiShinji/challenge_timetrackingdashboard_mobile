import { Stack, useGlobalSearchParams } from "expo-router"

export default function RootLayout() {
  const params = useGlobalSearchParams()

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="profile"
        options={{ title: "Back", headerShown: true }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          title: "Back",
        }}
      />
      <Stack.Screen
        name="modal/[activity]"
        options={{
          title: "Back",
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
