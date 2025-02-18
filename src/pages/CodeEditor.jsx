import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const DEFAULT_CODE = {
  cpp: '#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello includeIT!" << std::endl;\n    return 0;\n}',
  python: 'print("Hello World!")'
};

const CodeEditor = () => {
  const [code, setCode] = useState(DEFAULT_CODE.cpp);
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [isLoading, setIsLoading] = useState(false);
  const [savedCodes, setSavedCodes] = useState([]);
  const [codeName, setCodeName] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [selectedCodeId, setSelectedCodeId] = useState('new');

 
  useEffect(() => {
    const loadSavedCodes = () => {
      const savedData = localStorage.getItem('savedCodes');
      if (savedData) {
        try {
          const codes = JSON.parse(savedData);
          setSavedCodes(codes);
        } catch (e) {
          console.error('Failed to parse saved codes:', e);
        }
      }
    };
    loadSavedCodes();
  }, []);

 
  useEffect(() => {
    const loadLastSavedCode = () => {
      const lastSession = localStorage.getItem('lastCodeSession');
      if (lastSession) {
        try {
          const session = JSON.parse(lastSession);
          setCode(session.code);
          setLanguage(session.language);
        } catch (e) {
          console.error('Failed to load last session:', e);
        }
      }
    };
    loadLastSavedCode();
  }, []);

  useEffect(() => {
    const isDefaultCode = Object.values(DEFAULT_CODE).some(defaultCode => 
      code.trim() === defaultCode.trim()
    );
    
    if (isDefaultCode) {
      setCode(DEFAULT_CODE[language]);
    }
  }, [language, code]);

  
  useEffect(() => {
    localStorage.setItem('lastCodeSession', JSON.stringify({
      code,
      language,
      timestamp: new Date().toISOString()
    }));
  }, [code, language]);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
  };

  const handleRun = async () => {
    setIsLoading(true);
    setOutput('Running...');
    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language,
          version: LANGUAGE_VERSIONS[language],
          files: [
            {
              name: `main.${getFileExtension(language)}`,
              content: code,
            },
          ],
          stdin: stdin,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to execute code: ${response.statusText}`);
      }

      const result = await response.json();
      if (result.run) {
        const outputText = result.run.stdout || result.run.stderr || "No output generated";
        setOutput(outputText);
      } else {
        setOutput("Error: No execution result received");
      }
    } catch (err) {
      console.error("Execution error:", err);
      setOutput(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getFileExtension = (lang) => {
    const extensions = {
      cpp: "cpp",
      python: "py"
    };
    return extensions[lang];
  };

  const handleSaveClick = () => {
    setShowSaveDialog(true);
  };

  const handleSaveCode = () => {
    if (!codeName.trim()) {
      setOutput("Error: Please enter a name for your code");
      return;
    }

    const newCode = {
      id: Date.now().toString(),
      name: codeName,
      language,
      code,
      lastModified: new Date().toISOString()
    };

    const updatedCodes = [...savedCodes, newCode];
    setSavedCodes(updatedCodes);
    localStorage.setItem('savedCodes', JSON.stringify(updatedCodes));
    
    setCodeName('');
    setShowSaveDialog(false);
    setOutput(`Code "${codeName}" has been saved successfully!`);
  };

  const handleLoadCode = (e) => {
    const codeId = e.target.value;
    setSelectedCodeId(codeId);
    
    if (codeId === 'new') return;

    const savedCode = savedCodes.find(c => c.id === codeId);
    if (savedCode) {
      setCode(savedCode.code);
      setLanguage(savedCode.language);
      setOutput(`Loaded code: ${savedCode.name}`);
    }
  };

  const handleDeleteCode = () => {
    if (selectedCodeId === 'new') {
      setOutput("Error: No code selected for deletion");
      return;
    }

    const updatedCodes = savedCodes.filter(c => c.id !== selectedCodeId);
    setSavedCodes(updatedCodes);
    localStorage.setItem('savedCodes', JSON.stringify(updatedCodes));
    
    setSelectedCodeId('new');
    setOutput(`Code has been deleted successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8 px-2 sm:px-6 lg:px-8 flex flex-col">
      <div className="w-full max-w-4xl mx-auto flex-grow flex flex-col">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
        
          <div className="bg-gray-800 px-4 sm:px-6 py-3">
            <h1 className="text-lg sm:text-xl font-semibold text-white">Online Code Editor</h1>
          </div>
  
          <div className="border-b border-gray-200 px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="px-3 py-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="cpp">C++</option>
              <option value="python">Python</option>
            </select>
            
            <div className="flex gap-2 flex-grow justify-between">
              <div className="flex gap-2">
                <button
                  onClick={handleRun}
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
                >
                  {isLoading ? 'Running...' : 'Run Code'}
                </button>
                
                <button
                  onClick={handleSaveClick}
                  className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 text-sm"
                >
                  Save Code
                </button>
              </div>
              
              <div className="flex gap-2 items-center">
                {savedCodes.length > 0 && (
                  <>
                    <select
                      value={selectedCodeId}
                      onChange={handleLoadCode}
                      className="px-3 py-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="new">Load saved code...</option>
                      {savedCodes.map(savedCode => (
                        <option key={savedCode.id} value={savedCode.id}>
                          {savedCode.name} ({savedCode.language})
                        </option>
                      ))}
                    </select>
                    
                    {selectedCodeId !== 'new' && (
                      <button
                        onClick={handleDeleteCode}
                        className="px-3 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm"
                      >
                        Delete
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          
          {showSaveDialog && (
            <div className="px-4 sm:px-6 py-3 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <label htmlFor="code-name" className="text-sm font-medium text-gray-700">Code Name:</label>
                <input
                  id="code-name"
                  type="text"
                  value={codeName}
                  onChange={(e) => setCodeName(e.target.value)}
                  className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter a name for your code"
                />
                <button
                  onClick={handleSaveCode}
                  className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowSaveDialog(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          
          <div className="flex-grow min-h-0">
            <Editor
              height="50vh"
              language={language}
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 8, bottom: 8 },
              }}
              className="border-gray-200"
            />
          </div>

          {output && (
  <div className="px-4 sm:px-6 py-3 border-t border-gray-200">
    <div className="mb-4">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Input</h3>
      <textarea
        value={stdin}
        onChange={(e) => setStdin(e.target.value)}
        className="w-full bg-gray-50 p-3 rounded-md border border-gray-200 resize-y min-h-[100px] text-xs sm:text-sm"
        placeholder="Enter input for your program..."
      />
    </div>
    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Output</h3>
    <pre className="bg-gray-50 p-3 rounded-md border border-gray-200 overflow-x-auto whitespace-pre-wrap text-xs sm:text-sm max-h-48 overflow-y-auto">
      {output}
    </pre>
  </div>
)}
          
        
          {/* {output && (
            <div className="px-4 sm:px-6 py-3 border-t border-gray-200">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Output</h3>
              <pre className="bg-gray-50 p-3 rounded-md border border-gray-200 overflow-x-auto whitespace-pre-wrap text-xs sm:text-sm max-h-48 overflow-y-auto">
                {output}
              </pre>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

const LANGUAGE_VERSIONS = {
  cpp: "10.2.0",    
  python: "3.10.0" 
};

export default CodeEditor;