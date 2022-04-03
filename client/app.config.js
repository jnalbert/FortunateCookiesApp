import 'dotenv/config';

export default {
    expo: {
        name: "Fortunate Cookies",
        slug: "fortunatecookies",
        version: "1.0.3",
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
          supportsTablet: false,
          bundleIdentifier: "com.jnalbert879.fortunatecookies",
          buildNumber: "1",
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