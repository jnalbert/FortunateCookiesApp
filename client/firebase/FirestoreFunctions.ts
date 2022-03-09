import { Auth, db, storage } from "../config/firebase";
import { UserTypeClient, NewsCardTypeDB } from './types/MiscTypes';
import { setDoc, doc, collection, getDoc, getDocs } from "firebase/firestore"; 
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { reauthenticateWithCredential, signInWithEmailAndPassword, updatePassword } from "firebase/auth";


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


export const GetNewsFeedData = async () => { 
  try {
    const dataDocs = await getDocs(collection(db, "news"));
    
    const formattedData = await dataDocs.docs.map((doc: any) => doc.data());
    // console.log(formattedData);
    for (let i = 0; i < formattedData.length; i++) {
      const urlDownload = await getDownloadURL(ref(storage, formattedData[i].thumbnail));
      formattedData[i].thumbnail = urlDownload;
     }
    // console.log(formattedData);

    return formattedData;

  } catch (error) {
    console.log(error);
  }
}

export const GetGalleryCookiesImg = async () => {
  try {
    const folderRef = ref(storage, "DashBoardImgs/cookieDesigns");
    const cookieList = (await listAll(folderRef)).items
    const cookieData = []
    for (let i = 0; i < cookieList.length; i++) { 
      const urlDownload = await getDownloadURL(cookieList[i]);
      const cookieName = cookieList[i].name.substring(0, cookieList[i].name.indexOf("."));
      // console.log(cookieName)
      cookieData.push({src: urlDownload, name: cookieName})
    }
    return cookieData;
  } catch (error) {
    console.log(error);
  }
    
}


export const ContactSendData = async (email: string, body: string, type: "review" | "suggestion", uuid: string) => { 
  try {
    // console.log(email, body, type);
    // 5 digit integer random number
    const randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
    await setDoc(doc(db, "contactUs", `${type}${randomNumber}`), {
      email: email,
      body: body,
      date: new Date().toDateString(),
      uuid: uuid,
    })
  } catch (error) {
    console.log(error);
  }
}

export const GetRewardsData = async (uuid: string) => { 
  try {
    const userDoc = await getDoc(doc(db, "users", uuid));
    const userData = userDoc.data()
    const totalPointsEarned = userData?.totalPointsEarned;
    const totalRewardsEarned = userData?.totalRewardsEarned;
    const totalUsablePoints = totalPointsEarned - (totalRewardsEarned * 50);
    return totalUsablePoints;
  } catch (error) {
    console.log(error);
  }
}

export const GetProfileData = async (uuid: string) => { 
  try {
    const userDoc = await getDoc(doc(db, "users", uuid));
    const userData = userDoc.data()
    // console.log(userData)
    return userData;
  } catch (error) {
    console.log(error);
  }
}

export const ChangePassword = async (newPassword: string) => { 
  try {
    const currentUser = Auth.currentUser;
    // console.log(currentUser)
    await updatePassword(currentUser as any, newPassword);
    console.log("password changed")
  } catch (error: any) {
    console.log(error);
    return error.code;
  }
}

export const ReauthenticateUser = async (password: string) => { 
  try {
    const currentUser = Auth.currentUser;
    // console.log('first', currentUser?.email)
    await signInWithEmailAndPassword(Auth, currentUser?.email as string, password)
  
  } catch (error: any) {
    console.log(error.code)
    if (error.code === "auth/wrong-password") {
      return "wrongPass";
     }
  }

}

export const DoesPurchaseExist = async (code: string) => { 
  try {
    const purchaseDoc = await getDoc(doc(db, "users", code));
    
  } catch (error) {
    console.log(error);
  }
}

