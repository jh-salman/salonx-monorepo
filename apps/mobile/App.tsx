import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createSupabaseClient } from '@salonx/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Theme = 'blue' | 'pink' | 'yellow' | 'dark';

const getThemeColors = (theme: Theme) => {
  const themes = {
    blue: { background: 'bg-white', foreground: 'text-gray-900' },
    pink: { background: 'bg-white', foreground: 'text-gray-900' },
    yellow: { background: 'bg-white', foreground: 'text-gray-900' },
    dark: { background: 'bg-gray-900', foreground: 'text-white' },
  };
  return themes[theme];
};

const getCurrentTheme = async (): Promise<Theme> => {
  try {
    const savedTheme = await AsyncStorage.getItem('salonx-theme');
    return (savedTheme as Theme) || 'blue';
  } catch (error) {
    console.error('Failed to get theme preference:', error);
    return 'blue';
  }
};

const applyTheme = async (theme: Theme): Promise<void> => {
  try {
    await AsyncStorage.setItem('salonx-theme', theme);
  } catch (error) {
    console.error('Failed to save theme preference:', error);
  }
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('blue');
  const [themeColors, setThemeColors] = useState(getThemeColors('blue'));

  useEffect(() => {
    // Load saved theme on app start
    const loadTheme = async () => {
      const savedTheme = await getCurrentTheme();
      setCurrentTheme(savedTheme);
      setThemeColors(getThemeColors(savedTheme));
    };
    loadTheme();
  }, []);

  const handleThemeChange = async (theme: Theme) => {
    await applyTheme(theme);
    setCurrentTheme(theme);
    setThemeColors(getThemeColors(theme));
  };

  const handleTestSharedPackages = () => {
    console.log('Testing shared packages...');
    createSupabaseClient();
  };

  const ThemeButton = ({ theme, label }: { theme: Theme; label: string }) => (
    <TouchableOpacity
      style={[
        styles.themeButton,
        {
          backgroundColor: 
            theme === 'blue' ? '#3b82f6' :
            theme === 'pink' ? '#ec4899' :
            theme === 'yellow' ? '#eab308' :
            '#1f2937',
        },
        currentTheme === theme && styles.activeThemeButton,
      ]}
      onPress={() => handleThemeChange(theme)}
    >
      <Text style={[
        styles.themeButtonText,
        { color: theme === 'yellow' ? '#000' : '#fff' }
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background === 'bg-white' ? '#ffffff' : '#111827' }]}>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, { color: themeColors.foreground === 'text-gray-900' ? '#111827' : '#ffffff' }]}>
          SalonX Mobile App
        </Text>
        <Text style={[styles.subtitle, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
          Monorepo Architecture with 4 Themes
        </Text>

        {/* Theme Switcher */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: themeColors.foreground === 'text-gray-900' ? '#374151' : '#e5e7eb' }]}>
            Choose Your Theme:
          </Text>
          <View style={styles.themeButtons}>
            <ThemeButton theme="blue" label="Blue Theme" />
            <ThemeButton theme="pink" label="Pink Theme" />
            <ThemeButton theme="yellow" label="Yellow Theme" />
            <ThemeButton theme="dark" label="Dark Theme" />
          </View>
        </View>

        <TouchableOpacity 
          style={[
            styles.button, 
            { 
              backgroundColor: 
                currentTheme === 'blue' ? '#3b82f6' :
                currentTheme === 'pink' ? '#ec4899' :
                currentTheme === 'yellow' ? '#eab308' :
                '#3b82f6',
            }
          ]} 
          onPress={handleTestSharedPackages}
        >
          <Text style={styles.buttonText}>Tap to test shared packages</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: themeColors.foreground === 'text-gray-900' ? '#374151' : '#e5e7eb' }]}>
            Shared Packages:
          </Text>
          <Text style={[styles.package, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • @salonx/ui - UI Components
          </Text>
          <Text style={[styles.package, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • @salonx/api - Supabase & Redux
          </Text>
          <Text style={[styles.package, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • @salonx/types - TypeScript Types
          </Text>
          <Text style={[styles.package, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • @salonx/config - Shared Config
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: themeColors.foreground === 'text-gray-900' ? '#374151' : '#e5e7eb' }]}>
            Tech Stack:
          </Text>
          <Text style={[styles.tech, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • Expo (React Native)
          </Text>
          <Text style={[styles.tech, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • NativeWind (Tailwind CSS)
          </Text>
          <Text style={[styles.tech, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • Redux Toolkit
          </Text>
          <Text style={[styles.tech, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • Supabase Backend
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: themeColors.foreground === 'text-gray-900' ? '#374151' : '#e5e7eb' }]}>
            Features:
          </Text>
          <Text style={[styles.feature, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • Appointment Booking
          </Text>
          <Text style={[styles.feature, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • Staff Management
          </Text>
          <Text style={[styles.feature, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • Payment Processing
          </Text>
          <Text style={[styles.feature, { color: themeColors.foreground === 'text-gray-900' ? '#6b7280' : '#9ca3af' }]}>
            • Customer CRM
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  package: {
    fontSize: 14,
    marginBottom: 4,
  },
  tech: {
    fontSize: 14,
    marginBottom: 4,
  },
  feature: {
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  themeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  themeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    minWidth: 80,
  },
  activeThemeButton: {
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  themeButtonText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});
