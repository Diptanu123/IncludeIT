import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

const DEFAULT_CODE = {
  c: '#include <stdio.h>\nint main() {\n    printf("Hello includeIT!");\n    return 0;\n}',
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
  const outputRef = useRef(null);

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
        setTimeout(() => {
          outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
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
      c: "c",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20 sm:pt-20 pb-8 px-2 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex-grow flex flex-col">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full border border-gray-700">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-6 py-4">
            <h1 className="text-lg sm:text-2xl font-bold text-white tracking-wide">
              Online Code Editor
            </h1>
          </div>
  
          {/* Controls Bar */}
          <div className="border-b border-gray-700 px-3 sm:px-6 py-4 bg-gray-900 flex flex-col sm:flex-row sm:items-center gap-3">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
            </select>
            
            <div className="flex flex-col sm:flex-row gap-3 flex-grow justify-between">
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={handleRun}
                  disabled={isLoading}
                  className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Running...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Run Code
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleSaveClick}
                  className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Save Code
                </button>
              </div>
              
              {/* Load/Delete Controls */}
              <div className="flex gap-2 sm:gap-3 items-center w-full sm:w-auto">
                {savedCodes.length > 0 && (
                  <>
                    <select
                      value={selectedCodeId}
                      onChange={handleLoadCode}
                      className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
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
                        className="px-3 sm:px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Save Dialog */}
          {showSaveDialog && (
            <div className="px-3 sm:px-6 py-4 border-b border-gray-700 bg-gray-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <label htmlFor="code-name" className="text-sm font-medium text-white whitespace-nowrap">Code Name:</label>
                <input
                  id="code-name"
                  type="text"
                  value={codeName}
                  onChange={(e) => setCodeName(e.target.value)}
                  className="w-full flex-grow px-3 sm:px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter a name for your code"
                />
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleSaveCode}
                    className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm font-semibold"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setShowSaveDialog(false)}
                    className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Editor */}
          <div className="flex-grow min-h-0 bg-gray-900">
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
                padding: { top: 16, bottom: 16 },
                fontFamily: 'JetBrains Mono, monospace',
                smoothScrolling: true,
                cursorBlinking: 'smooth',
                cursorSmoothCaretAnimation: true,
                wordWrap: 'on',
              }}
              className="border-gray-700"
            />
          </div>

          {/* Input/Output Section */}
          {output && (
            <div ref={outputRef} className="px-3 sm:px-6 py-4 border-t border-gray-700 bg-gray-900">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Input
                </h3>
                <textarea
                  value={stdin}
                  onChange={(e) => setStdin(e.target.value)}
                  className="w-full bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-700 text-white resize-y min-h-[80px] sm:min-h-[100px] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter input for your program..."
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Output
              </h3>
              <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-700 overflow-x-auto whitespace-pre-wrap text-sm font-mono text-white max-h-48 overflow-y-auto">
                {output}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LANGUAGE_VERSIONS = {
  c: "10",
  cpp: "10.2.0",    
  python: "3.10.0" 
};

export default CodeEditor;