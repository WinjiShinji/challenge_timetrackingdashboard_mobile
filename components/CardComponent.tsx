import AppContext from "@/context/AppContext"
import { router } from "expo-router"
import { useContext } from "react"
import { Button, Image, StyleSheet, Text, View } from "react-native"

export default function CardComponent({ data, image, color }: Props) {
  const { state } = useContext(AppContext)

  const handleMenuBtn = () => {
    try {
      router.navigate(`/modal/${data.title || "work"}`)
    } catch (err) {
      console.log(err)
    } finally {
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: color }]}>
        <Image
          style={styles.img}
          source={image}
          height={50}
          width={50}
          alt=""
        />
      </View>

      <View style={styles.body}>
        <View style={styles.columnA}>
          <Text style={styles.title}>{data.title}</Text>
          <View>
            <Text style={styles.hours}>{`${
              state.daily === true
                ? data.timeframes.daily.current
                : state.weekly === true
                ? data.timeframes.weekly.current
                : state.monthly === true
                ? data.timeframes.monthly.current
                : 0
            }hrs`}</Text>
            <Text style={styles.state}>
              {`${
                state.daily === true
                  ? "yesterday -"
                  : state.weekly === true
                  ? "last week -"
                  : state.monthly === true
                  ? "last month -"
                  : "no state found!"
              } ${
                state.daily === true
                  ? data.timeframes.daily.previous
                  : state.weekly === true
                  ? data.timeframes.weekly.previous
                  : state.monthly === true
                  ? data.timeframes.monthly.previous
                  : "0"
              }hrs`}
            </Text>
          </View>
        </View>

        <View style={styles.columnB}>
          <View>
            <View style={styles.button}>
              <Button title=". . ." onPress={() => handleMenuBtn()} />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "hsl(235, 46%, 20%)",
    transform: [{ translateY: -16 }],
  },
  button: {
    width: 48,
    justifyContent: "flex-start",
    alignSelf: "flex-end",
    marginBottom: 0,
  },
  columnA: {
    justifyContent: "flex-start",
    width: "50%",
    padding: 16,
  },
  columnB: {
    justifyContent: "flex-start",
    width: "50%",
    padding: 16,
  },
  container: {},
  header: {
    height: 72,
    overflow: "hidden",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  hours: {
    color: "rgba(255, 255, 255, 0.87)",
    fontSize: 48,
    fontWeight: "300",
    letterSpacing: 1,
  },
  img: {
    alignSelf: "flex-end",
    transform: [{ scale: 1.4 }, { translateX: -16 }],
  },
  state: {
    color: "hsl(236, 100%, 87%)",
    textTransform: "capitalize",
    fontSize: 16,
    marginTop: 8,
    letterSpacing: 1,
  },
  title: {
    color: "rgba(255, 255, 255, 0.87)",
    textTransform: "capitalize",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 8,
    letterSpacing: 1,
  },
})
