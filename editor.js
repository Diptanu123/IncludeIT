// server.js (Express)
import express from "express"
import axios from "axios"
const app = express();
app.use(express.json());

app.post('/api/execute', async (req, res) => {
  try {
    const response = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions',
      req.body,
      { headers: { 'X-RapidAPI-Key': process.env.JUDGE0_API_KEY } }
    );
    res.json({ token: response.data.token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/result/:token', async (req, res) => {
  try {
    const result = await axios.get(
      `https://judge0-ce.p.rapidapi.com/submissions/${req.params.token}`,
      { headers: { 'X-RapidAPI-Key': process.env.JUDGE0_API_KEY } }
    );
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));