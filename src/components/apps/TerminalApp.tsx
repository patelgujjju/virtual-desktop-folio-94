import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X } from 'lucide-react';

interface TerminalAppProps {
  theme: 'light' | 'dark' | 'retro';
  onClose?: () => void;
}

const TerminalApp = ({ theme, onClose }: TerminalAppProps) => {
  const [history, setHistory] = useState<Array<{ command: string; output: string; timestamp: Date }>>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>(['help']);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => `Available commands:
  help          - Show this help message
  whoami        - Display user information
  skills        - Show technical skills
  experience    - Display work experience
  projects      - List my projects
  education     - Show educational background
  contact       - Display contact information
  clear         - Clear terminal
  pwd           - Show current directory
  ls            - List directory contents
  date          - Show current date and time
  uptime        - Show system uptime
  neofetch      - Display system info
  cowsay [text] - Make a cow say something
  matrix        - Start matrix effect
  exit          - Close terminal`,

    whoami: () => `Dhruvinkumar Patel
AI/ML Engineer | Full Stack Developer
Currently pursuing B.Tech in Computer Science (AI & Data Science)
MIT World Peace University, Pune
CGPA: 8.36/10`,

    skills: () => `Technical Skills:

Programming Languages:
  • Python, JavaScript, Java, C++, SQL
  
AI/ML & Data Science:
  • TensorFlow, PyTorch, Scikit-learn
  • OpenCV, YOLO, Computer Vision
  • Natural Language Processing
  • Deep Learning, Machine Learning
  
Web Development:
  • React.js, Node.js, Express.js
  • HTML5, CSS3, Bootstrap, Tailwind CSS
  • MongoDB, MySQL, PostgreSQL
  
Tools & Technologies:
  • Git, Docker, AWS, Google Cloud
  • Jupyter, VS Code, Postman
  • Streamlit, Gradio, Hugging Face`,

    experience: () => `Work Experience:

[June 2025 - July 2025] AI Engineer Intern
  Company: Alchemyte Data Solutions LLP
  • Developed AI-powered solutions for data processing
  • Implemented machine learning models for business automation
  • Worked with deep learning frameworks and cloud platforms

[April 2025 - June 2025] AI/ML Engineer Intern  
  Company: Ahir Infotech
  • Built computer vision applications using OpenCV and YOLO
  • Developed predictive models for client requirements
  • Collaborated on full-stack web applications`,

    projects: () => `My Projects:

1. SwiftWheels - Vehicle Rental Platform
   Tech: React, Node.js, MongoDB, JWT Authentication
   Live: https://swift-wheels-omega.vercel.app/

2. AI Object Detection & Extraction Tool
   Tech: Python, YOLOv3, SAM, Streamlit
   Live: https://huggingface.co/spaces/dhruvin-patel/aies-object-extractor

3. DeepFake Detection System
   Tech: TensorFlow, CNN, Computer Vision
   Live: https://huggingface.co/spaces/dhruvin-patel/DeepFake-Image-Detector

4. RAG System - Document Q&A
   Tech: Python, LangChain, OpenAI, Streamlit
   Live: https://dhruvinhet-rag.streamlit.app/

5. AI Personal Assistant (Python)
   Tech: Python, Speech Recognition, Automation APIs
   Features: Voice commands, task automation, web scraping`,

    education: () => `Education:

B.Tech in Computer Science (AI & Data Science)
MIT World Peace University, Pune
2023 - 2026
CGPA: 8.36/10

Relevant Coursework:
  • Machine Learning & Deep Learning
  • Computer Vision & Image Processing
  • Natural Language Processing
  • Data Structures & Algorithms
  • Database Management Systems
  • Web Technologies`,

    contact: () => `Contact Information:

Email: dhruvin5134@gmail.com
LinkedIn: https://www.linkedin.com/in/pateldhruvinkumar/
GitHub: https://github.com/dhruvinhet
Location: Pune, Maharashtra, India

Let's connect and build something amazing together!`,

    clear: () => {
      setHistory([]);
      return '';
    },

    pwd: () => `/home/dhruvin/portfolio`,

    ls: () => `total 8
drwxr-xr-x  2 dhruvin dhruvin 4096 Jan 11 12:00 projects/
drwxr-xr-x  2 dhruvin dhruvin 4096 Jan 11 12:00 certificates/
drwxr-xr-x  2 dhruvin dhruvin 4096 Jan 11 12:00 experience/
-rw-r--r--  1 dhruvin dhruvin 2048 Jan 11 12:00 resume.pdf
-rw-r--r--  1 dhruvin dhruvin 1024 Jan 11 12:00 README.md`,

    date: () => new Date().toString(),

    uptime: () => {
      const uptime = Math.floor(performance.now() / 1000);
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = uptime % 60;
      return `System uptime: ${hours}h ${minutes}m ${seconds}s`;
    },

    neofetch: () => `                   -\`               dhruvin@portfolio-pc
                  .o+\`               ---------------------
                 \`ooo/               OS: DhruvOS Portfolio Edition
                \`+oooo:              Host: Virtual Desktop Environment
               \`+oooooo:             Kernel: React 18.3.1
               -+oooooo+:            Uptime: ${Math.floor(performance.now() / 1000)} seconds
             \`/:-:++oooo+:           Packages: Tailwind, Lucide, TypeScript
            \`/++++/+++++++:          Shell: Terminal.tsx
           \`/++++++++++++++:         Resolution: ${window.innerWidth}x${window.innerHeight}
          \`/+++ooooooooooooo/\`       Theme: ${theme} mode
         ./ooosssso++osssssso+\`      CPU: Browser JavaScript Engine
        .oossssso-\`\`\`\`/ossssss+\`     Memory: Optimized for performance
       -osssssso.      :ssssssso.    
      :osssssss/        osssso+++.   
     /ossssssss/        +ssssooo/-   
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`,

    matrix: () => {
      setTimeout(() => {
        const chars = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ1234567890';
        let result = '';
        for (let i = 0; i < 50; i++) {
          for (let j = 0; j < 80; j++) {
            result += chars[Math.floor(Math.random() * chars.length)];
          }
          result += '\n';
        }
        return result;
      }, 100);
      return 'Initiating matrix...\n' + '01010010 01100101 01100001 01101100 01101001 01110100 01111001 00100000 01101001 01110011 00100000 01100001 01101110 00100000 01101001 01101100 01101100 01110101 01110011 01101001 01101111 01101110'.match(/.{1,8}/g)?.join(' ') || 'Matrix loading...';
    },

    cowsay: (text: string) => {
      const message = text || 'Hello from the terminal!';
      const border = '-'.repeat(message.length + 2);
      return `
 ${border}
< ${message} >
 ${border}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
    },

    exit: () => {
      if (onClose) {
        setTimeout(() => onClose(), 500);
      }
      return 'Goodbye! Thanks for visiting my terminal.';
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [command, ...args] = trimmedCmd.toLowerCase().split(' ');
    let output = '';

    if (command in commands) {
      if (command === 'cowsay') {
        output = commands.cowsay(args.join(' '));
      } else {
        output = (commands as any)[command]();
      }
    } else {
      output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    const newEntry = {
      command: trimmedCmd,
      output: output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newEntry]);
    setCommandHistory(prev => [trimmedCmd, ...prev.slice(0, 49)]);
    setCurrentCommand('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const welcomeMessage = {
      command: 'welcome',
      output: `
Welcome to DhruvOS Terminal v2.0
Type 'help' to see available commands.

 ____  _                        _       ____   ____  
|  _ \\| |__  _ __ _   ___   _(_)_ __ / __ \\ / ___|
| | | | '_ \\| '__| | | \\ \\ / / | '_ \\| | | |\\___ \\ 
| |_| | | | | |  | |_| |\\ V /| | | | | |_| | ___) |
|____/|_| |_|_|   \\__,_| \\_/ |_|_| |_|\\____/|____/ 

AI/ML Engineer & Full Stack Developer
`,
      timestamp: new Date()
    };
    setHistory([welcomeMessage]);
  }, []);

  const getTerminalStyle = () => {
    switch (theme) {
      case 'light':
        return 'bg-gray-50 text-gray-800';
      case 'retro':
        return 'bg-black text-green-400 font-mono';
      default:
        return 'bg-gray-900 text-green-400 font-mono';
    }
  };

  const getPromptStyle = () => {
    switch (theme) {
      case 'light':
        return 'text-blue-600';
      case 'retro':
        return 'text-yellow-400';
      default:
        return 'text-cyan-400';
    }
  };

  return (
    <div className={`h-full ${getTerminalStyle()}`} onClick={() => inputRef.current?.focus()}>
      <div className="flex items-center justify-between space-x-2 p-2 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4" />
          <span className="text-sm font-medium">Terminal</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-700 rounded transition-colors duration-200 text-gray-400 hover:text-white"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <div ref={terminalRef} className="p-4 h-full overflow-y-auto text-sm">
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.command !== 'welcome' && (
              <div className="flex items-center space-x-2">
                <span className={getPromptStyle()}>dhruvin@portfolio:~$</span>
                <span>{entry.command}</span>
              </div>
            )}
            <pre className="whitespace-pre-wrap mt-1 text-xs leading-relaxed">
              {entry.output}
            </pre>
          </div>
        ))}
        
        <div className="flex items-center space-x-2">
          <span className={getPromptStyle()}>dhruvin@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalApp;
