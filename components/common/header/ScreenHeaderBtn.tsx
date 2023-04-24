import React from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";

import { btnStyles, styles } from "./screenheader.style";

type Props = {
  iconURL: ImageSourcePropType;
  dimension?: string;
  handlePress?: () => void;
};

const ScreenHeaderBtn = ({ iconURL, dimension = "", handlePress }: Props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconURL}
        resizeMode="cover"
        style={btnStyles({ dimension }).btnImg}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
