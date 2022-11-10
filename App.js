import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home.screen";
import ColorScreen from "./screens/color.screen";
import {StatusBar} from 'react-native'
import ModalScreen from "./screens/modal.screen";

const Stack = createStackNavigator();

const App = () => {
  return <>
  <StatusBar barStyle={"dark-content"} />
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Color' component={ColorScreen} 
          options={({route}) => ({
            title: route.params.title
          })
          }
        />
      </Stack.Group>
      <Stack.Group screenOptions={{
        presentation: 'modal'
      }}>
        <Stack.Screen name="Modal" component={ModalScreen} options={{
          title:"Add New Palette"
        }} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
  </>
}
export default App;