// components/CodeEditor.js
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

const CodeEditor = () => {
  const [code, setCode] = useState('console.log("Hello World!");');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');

  const handleRun = async () => {
    try {
      const response = await axios.post(
        'https://judge0-ce.p.rapidapi.com/submissions',
        {
          source_code: btoa(code), // Encode to base64
          language_id: getLanguageId(language), // e.g., 63 for JavaScript
          stdin: '',
        },
        {
          headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          },
        }
      );

      // Fetch the result after submission
      const result = await axios.get(
        `https://judge0-ce.p.rapidapi.com/submissions/${response.data.token}`,
        { headers: { 'X-RapidAPI-Key': 'YOUR_API_KEY' } }
      );
      setOutput(atob(result.data.stdout)); // Decode base64 output
    } catch (err) {
      setOutput('Error: ' + err.message);
    }
  };

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
      <Editor
        height="400px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button onClick={handleRun}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
};

// Map languages to Judge0 language IDs
const getLanguageId = (lang) => {
  const languages = { javascript: 63, python: 71 };
  return languages[lang];
};

export default CodeEditor;