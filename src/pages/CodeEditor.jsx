import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const DEFAULT_CODE = {
  cpp: '#include <iostream>\n\nint main() {\n    std::cout << "Hello World!" << std::endl;\n    return 0;\n}',
  python: 'print("Hello World!")'
};

const CodeEditor = () => {
  const [code, setCode] = useState(DEFAULT_CODE.cpp);
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isDefaultCode = Object.values(DEFAULT_CODE).some(defaultCode => 
      code.trim() === defaultCode.trim()
    );
    
    if (isDefaultCode) {
      setCode(DEFAULT_CODE[language]);
    }
  }, [language, code]);

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
          stdin: "",
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
            <button
              onClick={handleRun}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
            >
              {isLoading ? 'Running...' : 'Run Code'}
            </button>
          </div>
          
          
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
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Output</h3>
              <pre className="bg-gray-50 p-3 rounded-md border border-gray-200 overflow-x-auto whitespace-pre-wrap text-xs sm:text-sm max-h-48 overflow-y-auto">
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
  cpp: "10.2.0",    
  python: "3.10.0" 
};

export default CodeEditor;