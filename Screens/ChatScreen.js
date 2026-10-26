
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SendMessage from '../services/Request';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSend = async (newMessages = []) => {
    if (loading || newMessages.length === 0) return;

    const updatedMessages = GiftedChat.append(messages, newMessages);
    setMessages(updatedMessages);
    setLoading(true);

    try {
      // Convert chat messages to OpenAI format
      const messageArray = [
        {
          role: 'system',
          content: `You are an AI booking assistant.

          Help users with bookings, locations,
          dates, prices and preferences.

          LANGUAGE RULES:
          - Respond in the same language as the user.
          - If the user writes in Danish, respond in Danish.
          - If the user writes in English, respond in English.
          - If the user switches language during the
            conversation, switch your response language
            accordingly.

          BOOKING RULES:
          - Help users find and plan bookings.
          - Ask relevant questions about location,
            date, time, budget and preferences.
          - Never invent available booking times.
          - Never invent prices or availability.
          - Be friendly, helpful and concise.`,
        },
        ...updatedMessages.slice().reverse().map((msg) => ({
          role: msg.user._id === 1 ? 'user' : 'assistant',
          content: msg.text,
        })),
      ];

      // Send messages to OpenAI
      const response = await SendMessage(messageArray);

      // Add AI response to chat
      const aiMessage = {
        _id: Date.now().toString(),
        text: response.content,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'AI Assistant',
        },
      };

      setMessages((previous) =>
        GiftedChat.append(previous, [aiMessage])
      );

    } catch (error) {
      console.error('AI error:', error);
      Alert.alert(
        'Error',
        'Could not get a response from AI.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
          name: 'User',
        }}
        isTyping={loading}
        placeholder="Skriv en besked / Type a message..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
