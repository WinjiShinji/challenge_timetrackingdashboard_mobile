import {
  Image,
  ImageURISource,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

type Props = {
  activity: {
    title: string
    timeframes: {
      daily: {
        current: number
        previous: number
      }
      weekly: {
        current: number
        previous: number
      }
      monthly: {
        current: number
        previous: number
      }
    }
  }
  image: ImageURISource
  color: string
}

export default function ActivityComponent({ activity, image, color }: Props) {
  return (
    <ScrollView style={styles.main}>
      <View style={[styles.header, { backgroundColor: color }]}>
        <Text style={styles.headerText}>{activity.title}</Text>
        <Image
          style={styles.img}
          source={image}
          alt={""}
          width={50}
          height={50}
        />
      </View>
      <View style={styles.stats}>
        <Text
          style={styles.activity}
        >{`Today - ${activity.timeframes.daily.current} hrs`}</Text>
        <Text
          style={styles.activity}
        >{`Yesterday - ${activity.timeframes.daily.previous} hrs`}</Text>
        <Text
          style={styles.activity}
        >{`This Week - ${activity.timeframes.weekly.current} hrs`}</Text>
        <Text
          style={styles.activity}
        >{`Last Week - ${activity.timeframes.weekly.previous} hrs`}</Text>
        <Text
          style={styles.activity}
        >{`This Month - ${activity.timeframes.monthly.current} hrs`}</Text>
        <Text
          style={styles.activity}
        >{`Last Month - ${activity.timeframes.monthly.previous} hrs`}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  activity: {
    color: "white",
    fontSize: 24,
    fontWeight: "300",
  },
  header: { overflow: "hidden", position: "relative", height: 72 },
  headerText: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: "500",
    alignSelf: "center",
    top: 16,
  },
  img: {
    alignSelf: "flex-end",
    transform: [{ scale: 1.4 }, { translateX: -16 }],
    position: "absolute",
  },
  main: { backgroundColor: "hsl(226, 43%, 10%)" },
  stats: {},
})
