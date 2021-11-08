import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDiPP4iwmAG2G_0D9LZ_1wCFO3cm-GH1tE",
    authDomain: "hamsters-585f2.firebaseapp.com",
    databaseURL: "https://hamsters-585f2-default-rtdb.firebaseio.com",
    projectId: "hamsters-585f2",
    storageBucket: "hamsters-585f2.appspot.com",
    messagingSenderId: "904892637549",
    appId: "1:904892637549:web:179c003833d5141f143a64",
    measurementId: "G-BQ39VSRT6R"
  };

  const firebase = initializeApp(firebaseConfig);

  export default firebase