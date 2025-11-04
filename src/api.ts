import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const sendChatMessage = async (conversationId: string, message: string) => {

  // const response = await axios.get(
  //   `${API_BASE_URL}/hello`
  // )

  const response = await axios.post(
    `${API_BASE_URL}/chat`,
    {
      "conversationId": conversationId,
      "message": message
    }
  )

  return response.data;
}











