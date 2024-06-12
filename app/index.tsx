import { AppProvider } from "@/context/AppContext"
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import HomeComponent from "@/components/HomeComponent"
import ActivityComponent from "@/components/ActivityComponent"
import data from "../data/data.json"

export default function Index() {
  const activityData = data[0]

  const inset = useSafeAreaInsets()
  const Tab = createMaterialTopTabNavigator()

  const FirstRoute = () => {
    return <HomeComponent />
  }

  const SecondRoute = () => {
    return (
      <ActivityComponent
        activity={activityData["work"]}
        image={require("../assets/images/icon-work.png")}
        color={"hsl(15, 100%, 70%)"}
      />
    )
  }
  const ThirdRoute = () => {
    return (
      <ActivityComponent
        activity={activityData["play"]}
        image={require("../assets/images/icon-play.png")}
        color={"hsl(195, 74%, 62%)"}
      />
    )
  }
  const FourthRoute = () => {
    return (
      <ActivityComponent
        activity={activityData["study"]}
        image={require("../assets/images/icon-study.png")}
        color={"hsl(348, 100%, 68%)"}
      />
    )
  }
  const FifthRoute = () => {
    return (
      <ActivityComponent
        activity={activityData["exercise"]}
        image={require("../assets/images/icon-exercise.png")}
        color={"hsl(145, 58%, 55%)"}
      />
    )
  }
  const SixthRoute = () => {
    return (
      <ActivityComponent
        activity={activityData["social"]}
        image={require("../assets/images/icon-social.png")}
        color={"hsl(264, 64%, 52%)"}
      />
    )
  }
  const SeventhRoute = () => {
    return (
      <ActivityComponent
        activity={activityData["selfcare"]}
        image={require("../assets/images/icon-self-care.png")}
        color={"hsl(43, 84%, 65%)"}
      />
    )
  }

  return (
    <SafeAreaProvider>
      <AppProvider>
        <Tab.Navigator
          style={{
            marginTop: inset.top,
            marginBottom: inset.bottom,
            marginRight: inset.right,
            marginLeft: inset.left,
          }}
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "hsl(226, 43%, 10%)",
            },
            tabBarActiveTintColor: "white",
            tabBarScrollEnabled: true,
          }}
        >
          <Tab.Screen name="Home" component={FirstRoute} />
          <Tab.Screen
            name={`${activityData.work.title}`}
            component={SecondRoute}
          />
          <Tab.Screen
            name={`${activityData.play.title}`}
            component={ThirdRoute}
          />
          <Tab.Screen
            name={`${activityData.study.title}`}
            component={FourthRoute}
          />
          <Tab.Screen
            name={`${activityData.exercise.title}`}
            component={FifthRoute}
          />
          <Tab.Screen
            name={`${activityData.social.title}`}
            component={SixthRoute}
          />
          <Tab.Screen
            name={`${activityData.selfcare.title}`}
            component={SeventhRoute}
          />
        </Tab.Navigator>
      </AppProvider>
    </SafeAreaProvider>
  )
}
