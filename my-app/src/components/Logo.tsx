import { View, Image} from "react-native";

export default function Logo() {
  return (
    <View>
      <Image source={require("../assets/images/logo.png")}></Image>
    </View>
  );
}