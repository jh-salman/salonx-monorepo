import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createSupabaseClient } from '@salonx/api';

export default function App() {
  const handleTestSharedPackages = () => {
    console.log('Testing shared packages...');
    createSupabaseClient();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>SalonX Mobile App</Text>
        <Text style={styles.subtitle}>Monorepo Architecture</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shared Packages:</Text>
          <Text style={styles.package}>• @salonx/ui - UI Components</Text>
          <Text style={styles.package}>• @salonx/api - Supabase & Redux</Text>
          <Text style={styles.package}>• @salonx/types - TypeScript Types</Text>
          <Text style={styles.package}>• @salonx/config - Shared Config</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleTestSharedPackages}>
          <Text style={styles.buttonText}>Tap to test shared packages</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tech Stack:</Text>
          <Text style={styles.tech}>• Expo (React Native)</Text>
          <Text style={styles.tech}>• NativeWind (Tailwind CSS)</Text>
          <Text style={styles.tech}>• Redux Toolkit</Text>
          <Text style={styles.tech}>• Supabase Backend</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features:</Text>
          <Text style={styles.feature}>• Appointment Booking</Text>
          <Text style={styles.feature}>• Staff Management</Text>
          <Text style={styles.feature}>• Payment Processing</Text>
          <Text style={styles.feature}>• Customer CRM</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 12,
  },
  package: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  tech: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  feature: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#3b82f6',
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
});
