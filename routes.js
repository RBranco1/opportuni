import { createStackNavigator, createAppContainer } from "react-navigation";
import App from './App';
import Sobre from "./Sobre";

const Routes = createStackNavigator({
  Home: {
    screen: App,
  },
  Sobre: {
    screen: Sobre,
  },
});

export default createAppContainer(Routes);