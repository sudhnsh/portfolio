"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface TerminalLine {
  id: number
  type: "command" | "output" | "system"
  content: string
  timestamp?: Date
}

const commands = {
  help: {
    description: "Show available commands",
    output: [
      "Available commands:",
      "  help     - Show this help message",
      "  about    - About Sudhanshu",
      "  exp      - Work experience",
      "  proj     - List all projects",
      "  contact  - Contact information",
      "  theme    - Switch terminal themes",
      "  clear    - Clear terminal",
      "",
      "Type any command and press Enter",
    ],
  },
  about: {
    description: "About Sudhanshu",
    output: [
      "Hi! I'm Sudhanshu Poonia 👋",
       "",
      "Software Engineer at MAQ Software.",
      "🎓 B.E. Computer Science - Thapar Institute of Engineering & Technology",
      "Writes mostly clean and efficient code — at least it works on my machine.",
      "Currently working at MAQ Software, and previously interned at Samsung.",
      "Enjoys working with React, Node.js, and occasionally dabbles in data and cloud stuff.",
    ],
  },
  exp: {
    description: "Work experience",
    output: [
      "Work Experience:",
      "",
      "🏢 MAQ Software                                    Dec 2023 - Present",
      "   Software Engineer 1",
      "   • Built SQL Visualizer using React and node-sql-parser",
      "   • Created developer portal and OpenAI model router",
      "   • Developed Power BI visuals improving performance by 35%",
      "   • Tech: Node.js, React, TypeScript, Power BI, SQL, Python, PySpark",
      "",
      "🤖 TimelyAI                                       Sept 2023 - Dec 2023",
      "   Software Engineer",
      "   • Architected scalable microservices with AWS Lambda",
      "   • Built automated image processing service with FIGMA API",
      "   • Reduced service interruptions by 40%",
      "   • Tech: Python, AWS, PostgreSQL, Git, GitHub",
      "",
      "📱 Samsung R&D, Noida                             Jan 2023 - Jun 2023",
      "   Research and Development Intern",
      "   • Implemented unit testing achieving 80% code coverage",
      "   • Developed Clock Application features",
      "   • Tech: Java, Kotlin, Android, JUnit, Mockito",
    ],
  },
  proj: {
    description: "List all projects",
    output: [
      "Projects:",
      "",
      "🔗 Subscription Price Index                       Current",
      "   → Compare streaming prices across countries",
      "   → Save up to 80% on Netflix, Spotify, Apple Music",
      "   → Tech: Next.js, TypeScript, Tailwind CSS",
      "   → URL: /subscription-index",
      "",
      "🧩 Better Extensions                              Nov 2024 - Present",
      "   → Suite of Chrome Extensions for Enhanced Browsing",
      "   → Search With, Better New Tab Lite, Better Skip Ads",
      "   → 95+ weekly active users",
      "   → Tech: React, JavaScript, Chrome API, TailwindCSS",
      "",
      "Total: 2 active projects",
    ],
  },
  contact: {
    description: "Contact information",
    output: [
      "Contact Information:",
      "",
      "📧 Email:",
      "   • sudhnsh16@hotmail.com",
      "   • sudhnsh16@gmail.com",
      "",
      "🔗 Links:",
      "   • GitHub: github.com/sudhnsh",
      "   • LinkedIn: linkedin.com/in/sudhnsh",
      "   • CodeChef: codechef.com/sudhnsh",
      "   • Codeforces: codeforces.com/sudhnsh",
      "   • LeetCode: leetcode.com/sudhnsh",
      "",
      "Feel free to reach out for collaborations or opportunities! 📧",
    ],
  },
  theme: {
    description: "Switch terminal themes",
    output: [
      "Available themes:",
      "",
      "🟢 matrix    - Classic green terminal (current)",
      "🔵 cyber     - Blue cyberpunk theme",
      "🟡 amber     - Retro amber terminal",
      "🔴 red       - Red alert theme",
      "🟣 purple    - Purple hacker theme",
      "⚪ mono      - Black and white",
      "",
      "Usage: theme <name>",
      "Example: theme cyber",
    ],
  },
  clear: {
    description: "Clear terminal",
    output: [],
  },
}

export default function Portfolio() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: 1, type: "system", content: "Welcome to Sudhanshu Poonia's Terminal v1.0" },
    { id: 2, type: "system", content: 'Type "help" to see available commands' },
    { id: 3, type: "system", content: "" },
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const [currentTheme, setCurrentTheme] = useState("matrix")

  const themes = {
    matrix: {
      bg: "bg-black",
      text: "text-green-400",
      accent: "text-green-300",
      border: "border-green-400/30",
      cursor: "bg-green-400",
      scanline: "rgba(34, 197, 94, 0.1)",
      name: "Matrix",
    },
    cyber: {
      bg: "bg-gray-900",
      text: "text-cyan-400",
      accent: "text-cyan-300",
      border: "border-cyan-400/30",
      cursor: "bg-cyan-400",
      scanline: "rgba(34, 211, 238, 0.1)",
      name: "Cyber",
    },
    amber: {
      bg: "bg-yellow-900",
      text: "text-amber-400",
      accent: "text-amber-300",
      border: "border-amber-400/30",
      cursor: "bg-amber-400",
      scanline: "rgba(251, 191, 36, 0.1)",
      name: "Amber",
    },
    red: {
      bg: "bg-red-950",
      text: "text-red-400",
      accent: "text-red-300",
      border: "border-red-400/30",
      cursor: "bg-red-400",
      scanline: "rgba(248, 113, 113, 0.1)",
      name: "Red Alert",
    },
    purple: {
      bg: "bg-purple-950",
      text: "text-purple-400",
      accent: "text-purple-300",
      border: "border-purple-400/30",
      cursor: "bg-purple-400",
      scanline: "rgba(196, 181, 253, 0.1)",
      name: "Purple",
    },
    mono: {
      bg: "bg-black",
      text: "text-gray-300",
      accent: "text-white",
      border: "border-gray-400/30",
      cursor: "bg-gray-300",
      scanline: "rgba(156, 163, 175, 0.1)",
      name: "Monochrome",
    },
  }

  const currentThemeConfig = themes[currentTheme as keyof typeof themes]

  // Auto-focus input and scroll to bottom
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  // Keep input focused
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  const typeText = async (text: string[], delay = 50) => {
    setIsTyping(true)

    for (const line of text) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      setLines((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          type: "output",
          content: line,
          timestamp: new Date(),
        },
      ])
    }

    setIsTyping(false)
  }

  const handleCommand = async (input: string) => {
    const command = input.toLowerCase().trim()
    const parts = command.split(" ")
    const mainCommand = parts[0]
    const args = parts.slice(1)

    // Add command to history
    setCommandHistory((prev) => [...prev, input])
    setHistoryIndex(-1)

    // Add command line
    setLines((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "command",
        content: `> ${input}`,
        timestamp: new Date(),
      },
    ])

    // Handle special commands
    if (mainCommand === "clear") {
      setTimeout(() => {
        setLines([
          { id: 1, type: "system", content: "Terminal cleared" },
          { id: 2, type: "system", content: 'Type "help" to see available commands' },
          { id: 3, type: "system", content: "" },
        ])
      }, 500)
      return
    }

    // Handle theme command
    if (mainCommand === "theme") {
      if (args.length === 0) {
        await typeText(commands.theme.output)
        return
      }

      const themeName = args[0]
      if (themes[themeName as keyof typeof themes]) {
        setCurrentTheme(themeName)
        await typeText([
          `Theme changed to: ${themes[themeName as keyof typeof themes].name}`,
          `Enjoy your new ${themeName} terminal! 🎨`,
        ])
      } else {
        await typeText([`Theme '${themeName}' not found.`, "Available themes: matrix, cyber, amber, red, purple, mono"])
      }
      return
    }

    // Handle other commands
    if (commands[mainCommand as keyof typeof commands]) {
      await typeText(commands[mainCommand as keyof typeof commands].output)
    } else {
      await typeText([`Command not found: ${input}`, 'Type "help" to see available commands'])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim() && !isTyping) {
      handleCommand(currentInput.trim())
      setCurrentInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentInput("")
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
      }
    }
  }

  return (
    <div
      className={`min-h-screen ${currentThemeConfig.bg} ${currentThemeConfig.text} font-mono relative overflow-hidden`}
    >
      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-${currentThemeConfig.text}/5 to-transparent animate-pulse`}
        ></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              ${currentThemeConfig.scanline} 2px,
              ${currentThemeConfig.scanline} 4px
            )`,
          }}
        ></div>
      </div>

      <div ref={terminalRef} className="relative z-10 h-screen overflow-y-auto p-6">
        {/* Terminal Header */}
        <div className={`mb-4 pb-2 border-b ${currentThemeConfig.border}`}>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`ml-4 ${currentThemeConfig.accent}`}>sudhnsh@portfolio:~$</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="space-y-1">
          {lines.map((line) => (
            <div
              key={line.id}
              className={`
              ${line.type === "command" ? currentThemeConfig.accent : ""}
              ${line.type === "system" ? currentThemeConfig.accent : ""}
              ${line.type === "output" ? currentThemeConfig.text : ""}
            `}
            >
              {line.content}
            </div>
          ))}
        </div>

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className={`${currentThemeConfig.accent} mr-2`}>&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            className={`flex-1 bg-transparent ${currentThemeConfig.text} outline-none font-mono`}
            placeholder={isTyping ? "Processing..." : "Type a command..."}
            autoComplete="off"
            spellCheck="false"
          />
          <span className={`w-2 h-5 ${currentThemeConfig.cursor} animate-pulse ml-1`}></span>
        </form>

        {/* Help hint */}
        {lines.length <= 6 && (
          <div className={`mt-8 ${currentThemeConfig.text} opacity-60 text-sm`}>
            💡 Try: help, about, exp, proj, contact, theme
          </div>
        )}
      </div>

      {/* CRT effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/20"></div>
    </div>
  )
}
