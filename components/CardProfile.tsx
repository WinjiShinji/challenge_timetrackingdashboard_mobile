import { useContext } from "react"
import AppContext from "../context/AppContext"
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { router } from "expo-router"

export default function CardTop() {
  const { state, dispatch } = useContext(AppContext)

  const handleProfilePress = () => {
    try {
      router.navigate("/profile")
    } catch (err) {
      console.log(err)
    } finally {
    }
  }

  return (
    <View style={styles.main}>
      {/* Card Header */}
      <View style={styles.header}>
        <Pressable onLongPress={() => handleProfilePress()}>
          <Image
            style={styles.img}
            source={require("../assets/images/image-jeremy.png")}
            alt="Your profile picture"
            width={200}
            height={200}
          />
          <View>
            <Text style={styles.headerP}>Report for</Text>
            <Text style={styles.headerH2}>Jeremy Robson</Text>
          </View>
        </Pressable>
      </View>

      {/* Card Body */}
      <View style={styles.button}>
        <Button
          title="Daily"
          onPress={() => {
            dispatch({ type: "daily" })
          }}
          color={
            state.daily === true ? "hsl(236, 100%, 87%)" : "hsl(235, 46%, 20%)"
          }
        />
        <Button
          title="Weekly"
          onPress={() => {
            dispatch({ type: "weekly" })
          }}
          color={
            state.weekly === true ? "hsl(236, 100%, 87%)" : "hsl(235, 46%, 20%)"
          }
        />
        <Button
          title="Monthly"
          onPress={() => {
            dispatch({ type: "monthly" })
          }}
          color={
            state.monthly === true
              ? "hsl(236, 100%, 87%)"
              : "hsl(235, 46%, 20%)"
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "hsl(246, 80%, 60%)",
  },
  img: {
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 128,
    borderWidth: 1,
    borderColor: "white",
  },
  headerP: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    paddingTop: 16,
    letterSpacing: 1,
  },
  headerH2: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    paddingBottom: 16,
    letterSpacing: 1,
  },
  button: {
    width: "100%",
    backgroundColor: "blue",
  },
})
