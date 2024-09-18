import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [phone, setPhone] = useState('');
  
  const handleContinue = () => {
    // Xử lý sự kiện khi nhấn vào "Tiếp tục"
    alert('Số điện thoại của bạn: ' + phone);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="numeric"
          value={phone}
          onChangeText={setPhone}
        />
        <TouchableOpacity
          style={[styles.button, phone ? styles.buttonEnabled : styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={!phone}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  loginContainer: {
    backgroundColor: '#fff',
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    borderBottomWidth: 2,                // Độ dày của đường kẻ
    borderBottomColor: 'gray',           // Màu xám bóng hơi đậm cho đường kẻ
    paddingBottom: 10,                   // Khoảng cách giữa chữ và đường kẻ
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 20,
    color:'gray'
  },
  button: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#4CAF50',
  },
  buttonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
