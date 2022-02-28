import { db } from "../../config/firebase";
import { UserTypeClient } from "./MiscTypes";
import { setDoc, doc, collection } from "firebase/firestore"; 


export const addNewAccountToDB = async ({
  uuid,
  name,
  dateJoined,
  phoneNumber,
  totalCookiesPurchased,
  totalRewardsEarned,
  totalPointsEarned,
  email,
}: UserTypeClient) => {

  try {
    await setDoc(doc(db, "users", uuid), {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      dateJoined: dateJoined,
      totalCookiesPurchased: totalCookiesPurchased,
      totalRewardsEarned: totalRewardsEarned,
      totalPointsEarned: totalPointsEarned,
    });

    
  } catch (error) {
    console.log(error);
  }
};

