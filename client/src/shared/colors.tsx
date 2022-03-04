import { Linking } from "react-native"

export const backgroundColor = "#fffffffe"

export const Pink = "#FF70A0"

export const Teal = "#53CACA"

export const YellowFor = "#FFF799"

export const GreenFor = "#9DE7B3"

export const Purple = "#E0C0FF"

export const Black = "#181D2D"

export const Text500 = "#1D232E"

export const Text400 = "#5D6470"

export const Text300 = "#A7B0C0"

export const Text200 = "#E7ECF3"

export const Text100 = "#F8FAFD"

export const borderColor = "#C1C7D0"

export const backgroundGray = "#F8FAFD"

export const logoutRed = "#F85149"

export const FrankFurter = "Frankfurter"

export const Poppins = "Poppins"

export const SourceSerif = "SourceSerif"

export const Nunito = "Nunito"

export const NunitoBold = "NunitoBold"

export const loadInBrowser = (url: string) => {
  Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  return;
};