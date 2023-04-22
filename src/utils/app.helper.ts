import { ColorVariation } from "../components/Atoms/StyledText/StyledText"
import { colors } from "../theme"



export const getColor = (color: ColorVariation) => {
  switch(color){
    case "black":
      return colors.$colorBlack
    case "blue":
      return colors.$colorBlue
    case "blueLight":
      return colors.$colorBlueLight
    case "green":
      return colors.$colorGreen
    case "grey":
      return colors.$colorGrey
    case "red":
      return colors.$colorRed
    case "white":
      return colors.$colorWhite
  }
}