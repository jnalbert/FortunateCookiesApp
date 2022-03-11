import { Auth, db, storage } from "../config/firebase";
import { UserTypeClient, NewsCardTypeDB } from './types/MiscTypes';
import { setDoc, doc, collection, getDoc, getDocs, updateDoc, increment } from "firebase/firestore"; 
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { reauthenticateWithCredential, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { CookieDataType } from "../src/components/mainComps/Rewards/CookiePurchaseSection";



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

const getIndividualCookieData = async (name: string) => { 
  const purchaseDoc = await getDoc(doc(db, "CookiesInfo", name));
  return purchaseDoc.data();
}

export const getPurchaseDataWithCode = async (code: string) => { 
  try {
    const purchaseDoc = await getDoc(doc(db, "orders", code));
    const purchaseData = purchaseDoc.data();
    // console.log('purchaseData', purchaseData)
    if (!purchaseData) {
      return null;
    }
    // console.log('purchase data')
    const productsWithData: any[] = []
    const products = purchaseData.products;
    for (let i = 0; i < products.length; i++) {
      const cookieData = await getIndividualCookieData(products[i]);
      productsWithData.push({ ...cookieData, date: purchaseData.date})
    }
    return productsWithData;
  } catch (error) {
    console.log(error);
  }
}

export const addOrderToProfile = async (uuid: string, orderData: CookieDataType[], code: string) => {
  try {
    let totalCookiesPurchased = 0;
    let totalPoints = 0;
    orderData.forEach(cookie => {
      totalCookiesPurchased += cookie.count;
      totalPoints += cookie.points;
    })

    const date = orderData[0].date;

    const purchaseDoc = await getDoc(doc(db, "orders", code));
    const purchaseData = purchaseDoc.data()

    const returnProducts = []
    for (let i = 0; i < purchaseData?.products.length; i++) { 
      const product = purchaseData?.products[i];
      // console.log(product)
      const returnProductAdd = {product, date: date }
      returnProducts.push(returnProductAdd)
    }

    // console.log(returnProducts)

    const userDoc = doc(db, "users", uuid);
    await updateDoc(userDoc, {
      totalCookiesPurchased: increment(totalCookiesPurchased),
      totalPointsEarned: increment(totalPoints),
    })

    for (let i = 0; i < returnProducts.length; i++) { 
      await setDoc(doc(collection(db, `users/${uuid}/purchases/`)), {
        date: returnProducts[i].date,
        product: returnProducts[i].product,
      });
    }

  } catch (error) {
    console.log(error)
  }
}


export const getAllCookieData = async (uuid: string) => {
  try {
    const allDocInList = await getDocs(collection(db, `users/${uuid}/purchases/`));
    const getFormattedData = await allDocInList.docs.map((doc: any) => doc.data());
    // console.log(getFormattedData, "Here")
    const returnList: any[] = [];
    for (let i = 0; i < getFormattedData.length; i++) { 
      // console.log(getFormattedData[i])
      returnList.push({product: getFormattedData[i].product, date: getFormattedData[i].date})
    }
    
    // console.log(returnList)

    const formattedCookies: any[] = []

    for (let i = 0; i < returnList.length; i++) {
      const cookieData = await getIndividualCookieData(returnList[i].product);
      formattedCookies.push({ ...cookieData, date: returnList[i].date, header: "Fortune Cookies"})
    }

    return formattedCookies;

  } catch (error) {
    console.log(error)
  }
}