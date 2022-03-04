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

