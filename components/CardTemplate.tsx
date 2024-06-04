import { useContext, useState } from "react"
import AppContext from "../context/AppContext"
import { Link } from "expo-router"
import { Button, Image, ImageSourcePropType, Text, View } from "react-native"

type Props = {
  data: {
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
  image: ImageSourcePropType | undefined
}
export default function CardTemplate({ data, image }: Props) {
  const [menuIsActive, setMenuIsActive] = useState(false)

  const { state } = useContext(AppContext)

  const handleMenuEvent = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (menuIsActive === true) {
      return setMenuIsActive(false)
    } else {
      return setMenuIsActive(true)
    }
  }

  return (
    <View>
      {/* Card Top */}
      <View>
        <Image source={image} alt={data.title} width={50} height={50} />
      </View>

      {/* Card Middle */}
      <View>
        <Link href={`/activity/${data.title}`}>
          <Text>{data.title}</Text>
          <Text>
            {state.daily
              ? data.timeframes.daily.current
              : state.weekly
              ? data.timeframes.weekly.current
              : state.monthly
              ? data.timeframes.monthly.current
              : "0"}
            <Text>hrs</Text>
          </Text>
          <Image
            source={require("../assets/images/icon-ellipsis.svg")}
            alt={"Card options"}
            width={50}
            height={50}
          />
          <Text>
            {state.daily
              ? "Yesterday"
              : state.weekly
              ? "Last Week"
              : state.monthly
              ? "Last Month"
              : ""}{" "}
            -
            <Text>
              {" "}
              {state.daily
                ? data.timeframes.daily.previous
                : state.weekly
                ? data.timeframes.weekly.previous
                : state.monthly
                ? data.timeframes.monthly.previous
                : "0"}
              hrs
            </Text>
          </Text>
        </Link>
      </View>
    </View>
  )
}
