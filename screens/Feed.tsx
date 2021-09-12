import * as React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { resetAuthUser } from "../store/auth/actions";

export default function Feed({ navigation }: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <Button
        onPress={() => {
          getAuth()
            .signOut()
            .then(() => {
              dispatch(resetAuthUser());
            });
        }}
        title="logout"
        // color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
