import 'dotenv/config';

export default {
    expo: {
        name: "Fortunate Cookies",
        slug: "fortunatecookies",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/SmallLogo.png",
        splash: {
          image: "./assets/OfficialLogo.png",
          resizeMode: "contain",
          backgroundColor: "#ffffffe"
        },
        updates: {
          fallbackToCacheTimeout: 0
        },
        assetBundlePatterns: [
          "**/*"
        ],
        ios: {
          supportsTablet: false
        },
        android: {
          adaptiveIcon: {
            foregroundImage: "./assets/SmallLogo.png",
            backgroundColor: "#FFFFFF"
          }
        },
        web: {
          favicon: "./assets/SmallLogo.png"
        },
        extra: {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID,
          }

      }
}