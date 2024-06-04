import { StyleSheet, View } from "react-native"
import CardProfile from "../components/CardProfile"
import { AppProvider } from "@/context/AppContext"
import { SafeAreaView } from "react-native-safe-area-context"
import data from "../data/data.json"
import CardTemplate from "@/components/CardTemplate"

export default function Index() {
  const activityData = data[0]

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <AppProvider>
          <CardProfile />
          <CardTemplate
            data={activityData.work}
            image={require("../assets/images/icon-work.svg")}
          />
        </AppProvider>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "hsl(226, 43%, 10%)",
  },
})
