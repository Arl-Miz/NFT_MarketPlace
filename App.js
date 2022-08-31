// import "react-native-gesture-handler";
// import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// import { LogBox } from "react-native";
import "./ignoreWarnings";

// import { Provider } from "react-redux";
// import store from "./src/screens/Todo/store";

import Home from "./src/screens/Home";
import Intro from "./src/screens/Intro";
import Account from "./src/screens/Account";
import Browse from "./src/screens/Browse";
import ListItems from "./src/screens/ListItems";
import Notification from "./src/screens/Notification";
import Settings from "./src/screens/Settings";
import NftListScreen from "./src/screens/NftListScreen";
import Collection from "./src/screens/Collection";
import OnBoarding from "./src/screens/onboarding/App";
import Tabs from "./src/components/Tabs";

// import { ContextProvider } from "./src/context/ContextProvider";
// import BtmS from "./src/screens/BtmS";
// import bse from "./src/screens/Bse";
// import RNSql from "./src/screens/RNSql";
// import Sequel from "./src/sqlite-exmpl/src/Sequel";
// import DT from "./src/screens/DT";
// LogBox.ignoreAllLogs();
const App = () => {
  return (
    // <ContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Intro" component={Intro} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ListItems" component={ListItems} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="NftListScreen" component={NftListScreen} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Collection" component={Collection} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
    // </ContextProvider>
  );
};

export default App;

// import "react-native-gesture-handler";
// import React, { useContext } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();
// // import { LogBox } from "react-native";
// import "./ignoreWarnings";

// // import { Provider } from "react-redux";
// // import store from "./src/screens/Todo/store";

// import Lott from "./src/screens/Lott";
// import Home from "./src/screens/Home";
// import Todo from "./src/screens/Todos";
// import AddForm from "./src/screens/AddForm";

// import { ContextProvider } from "./src/context/ContextProvider";
// import BtmS from "./src/screens/BtmS";
// import bse from "./src/screens/Bse";
// import RNSql from "./src/screens/RNSql";
// import Sequel from "./src/sqlite-exmpl/src/Sequel";
// import DT from "./src/screens/DT";
// // LogBox.ignoreAllLogs();
// const App = () => {
//   return (
//     <ContextProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="DT" component={DT} />
//           <Stack.Screen name="todo" component={Todo} />
//           <Stack.Screen name="base" component={bse} />
//           <Stack.Screen name="seq" component={RNSql} />
//           <Stack.Screen name="home" component={Home} />
//           {/* <Stack.Screen name="seql" component={Sequel} /> */}
//           <Stack.Screen name="btms" component={BtmS} />
//           <Stack.Screen name="lott" component={Lott} />
//           <Stack.Screen name="addForm" component={AddForm} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </ContextProvider>
//   );
// };

// export default App;
