import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { RootStackParamList, AuthTypes } from './src/config/types';
import { AppProvider, AppContext } from './src/contexts/AppContext';
import { getUserToken, clearData } from './src/actions/login';


import { Splash } from './src/screens/Splash';
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function RootRouter() {
  const { state: { auth }, dispatch } = React.useContext(AppContext);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      userToken = await getUserToken();

      dispatch({ type: AuthTypes.RESTORE_TOKEN, token: userToken });
    };

    bootstrapAsync();
  }, []);
  console.log(auth)

  if (auth.isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!auth.userToken ? (
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
          </>
        ): (
          <>
            <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <AppProvider>
      <PaperProvider>
        <RootRouter />
      </PaperProvider>
    </AppProvider>
  );
}

export default App;

