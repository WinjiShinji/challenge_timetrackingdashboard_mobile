import { ScrollView, StyleSheet, Text, View } from "react-native"
import data from "../data/data.json"

export default function profile() {
  const activityData = data[0]
  const activityStats = Object.values(activityData).map((item) => {
    return (
      <View key={item.title}>
        <Text style={[styles.color, styles.title]}>{item.title}</Text>
        <View style={styles.activity}>
          <Text
            style={[styles.color, styles.item]}
          >{`Today - ${item.timeframes.daily.current} hrs`}</Text>
          <Text
            style={[styles.color, styles.item]}
          >{`Yesterday - ${item.timeframes.daily.previous} hrs`}</Text>
          <Text
            style={[styles.color, styles.item]}
          >{`This Week - ${item.timeframes.weekly.current} hrs`}</Text>
          <Text
            style={[styles.color, styles.item]}
          >{`Last Week - ${item.timeframes.weekly.previous} hrs`}</Text>
          <Text
            style={[styles.color, styles.item]}
          >{`This Month - ${item.timeframes.monthly.current} hrs`}</Text>
          <Text
            style={[styles.color, styles.item]}
          >{`Last Month - ${item.timeframes.monthly.previous} hrs`}</Text>
        </View>
      </View>
    )
  })

  return (
    <ScrollView style={styles.main}>
      <View>
        <Text style={[styles.color, styles.header]}>Statistics</Text>
      </View>
      {activityStats}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  activity: { marginTop: 8, marginBottom: 16 },
  color: { color: "white", letterSpacing: 1 },
  header: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: 1,
  },
  item: { fontSize: 24, fontWeight: 300 },
  main: {
    backgroundColor: "hsl(226, 43%, 10%)",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 400,
  },
})
