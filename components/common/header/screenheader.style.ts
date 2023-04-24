import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

type Props = {
  dimension?: string;
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

const btnStyles = (props: Props) =>
  StyleSheet.create({
    btnImg: {
      width: props.dimension,
      height: props.dimension,
      borderRadius: SIZES.small / 1.25,
    },
  });

export { styles, btnStyles };
