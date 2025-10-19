import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const sendChatMessage = async (conversationId: string, userInput: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/chat`,
    {
      conversationId, userInput
    }
  )
  return response.data;
}











