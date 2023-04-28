import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles, popularJobStyles } from "./popularjobcard.style";

export type Item = {
  employer_logo: string;
  employer_name: string;
  job_title: string;
  job_country: string;
};

type PopularJobCard = {
  item: Item;
  selectedJob: string;
  handleCardPress: (item: any) => void;
};

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: PopularJobCard) => {
  console.log(item.employer_logo);

  return (
    <TouchableOpacity style={popularJobStyles({ item, selectedJob }).container}>
      <TouchableOpacity
        style={popularJobStyles({ item, selectedJob }).logoContainer}
      >
        <Image
          source={{
            uri: !!item.employer_logo
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          numberOfLines={1}
          style={popularJobStyles({ item, selectedJob }).jobName}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
