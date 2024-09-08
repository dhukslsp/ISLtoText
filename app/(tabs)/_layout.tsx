import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'ISL to text convert',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox' : 'chatbox'} color={color} />
          ),
        }}
        
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Speak through ISL',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'volume-high-sharp' : 'volume-high-sharp'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'My Account',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
