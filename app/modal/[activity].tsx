import { Link, router, useGlobalSearchParams } from "expo-router"
import { Text, View } from "react-native"

export default function activity() {
  const { activity } = useGlobalSearchParams()
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack()
  return (
    <View style={{ backgroundColor: "hsl(235, 46%, 20%)", flex: 1 }}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <Text
        style={{
          color: "white",
          fontSize: 48,
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >{`${activity} settings`}</Text>
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Menu Item 1
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Menu Item 2
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Menu Item 3
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Menu Item 4
      </Text>
    </View>
  )
}
