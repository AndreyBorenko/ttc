import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";
import { authUserStart, authUserError } from "../store/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { isAuthUserLoadingSelector } from "../store/auth/selectors";

export default function SignIn({ navigation }: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(isAuthUserLoadingSelector);
  const logIn = () => {
    dispatch(authUserStart());
    signInWithEmailAndPassword(
      getAuth(),
      "PIDAR@dsad.com",
      "LOHSUkablyad"
    ).catch((error) => {
      dispatch(authUserError(error));
    });
  };

  return (
    <View style={styles.container}>
      <Input
        containerStyle={{}}
        // disabledInputStyle={{ background: "#dddddd" }}
        inputContainerStyle={{}}
        errorMessage="Oops! that's not correct."
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="User Form"
        labelStyle={{}}
        labelProps={{}}
        // leftIcon={<Icon name="account-outline" size={20} />}
        leftIconContainerStyle={{}}
        // rightIcon={<Icon name="close" size={20} />}
        rightIconContainerStyle={{}}
        placeholder="Enter Name"
      />
      <Input
        containerStyle={{}}
        // disabledInputStyle={{ background: "#dddddd" }}
        inputContainerStyle={{}}
        errorMessage="Oops! that's not correct."
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="User Form"
        labelStyle={{}}
        labelProps={{}}
        // leftIcon={<Icon name="account-outline" size={20} />}
        leftIconContainerStyle={{}}
        // rightIcon={<Icon name="close" size={20} />}
        rightIconContainerStyle={{}}
        placeholder="Enter E-mail"
      />

      <Button
        onPress={logIn}
        title="Learn More"
        // color="#841584"
        accessibilityLabel="Learn more about this purple button"
        loading={isAuthLoading}
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
