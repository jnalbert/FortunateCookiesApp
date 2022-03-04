import { db, storage } from "../config/firebase";
import { UserTypeClient, NewsCardTypeDB } from './types/MiscTypes';
import { setDoc, doc, collection, getDoc, getDocs } from "firebase/firestore"; 
import { getDownloadURL, listAll, ref } from "firebase/storage";


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
    const cookieList = listAll(folderRef);
    console.log(cookieList);
  } catch (error) {
    console.log(error);
  }
    
}

