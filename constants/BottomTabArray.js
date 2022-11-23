import { Screens } from './ScreenHub';
import { Icons } from '../assets/theme/icons';

export const BottomTabArray = [
  {
    name: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Screens.HomeScreen,
  },
  {
    name: 'Drink',
    label: 'Drinks ',
    type: Icons.Ionicons,
    activeIcon: 'beer',
    inActiveIcon: 'beer-outline',
    component: Screens.DrinkScreen,
  },
  {
    name: 'Profile',
    label: 'Profile',
    type: Icons.FontAwesome,
    activeIcon: 'user',
    inActiveIcon: 'user-o',
    component: Screens.ProfileScreen,
  },
  {
    name: 'Settings',
    label: 'Settings',
    type: Icons.Ionicons,
    activeIcon: 'settings',
    inActiveIcon: 'settings-outline',
    component: Screens.SettingsScreen,
  },
];
