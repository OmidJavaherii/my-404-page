import { useState, useEffect, useCallback } from "react";

// Language content
const translations = {
  en: {
    title: "404",
    mainMessage: "Happy 404 Day, Developers! 🎉",
    subMessage: "No server here, no running code, just a cool error!",
    buttonText: "Try Again (Maybe you'll get lucky!)",
    systemRebooting: "SYSTEM_REBOOTING...",
    footer: "system.error.log"
  },
  fa: {
    title: "۴۰۴",
    mainMessage: "سال ۴۰۴ مبارک برنامه‌نویس‌ها! 🎉",
    subMessage: "اینجا نه سرور پیدا می‌شه، نه کدت اجرا می‌شه، فقط یه ارور با حال!",
    buttonText: "تلاش دوباره (شاید این بار شانس بیاری!)",
    systemRebooting: "سیستم در حال راه‌اندازی مجدد...",
    footer: "سیستم.خطا.گزارش"
  }
};

function App() {
  const [hoverButton, setHoverButton] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(5);
  const [language, setLanguage] = useState<"en" | "fa">("fa");
  const [errorCodes, setErrorCodes] = useState<string[]>([
    "ERR_CONNECTION_REFUSED",
    "HTTP_404_NOT_FOUND",
    "DNS_PROBE_FAILED",
    "ERR_NETWORK_CHANGED",
    "RESOURCE_UNAVAILABLE"
  ]);

  useEffect(() => {
    // Fake countdown effect
    const countdownInterval = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 5));
    }, 1000);
    
    // Shuffle error codes periodically
    const shuffleInterval = setInterval(() => {
      setErrorCodes(prevCodes => [...prevCodes.slice(1), prevCodes[0]]);
    }, 2000);
    
    return () => {
      clearInterval(countdownInterval);
      clearInterval(shuffleInterval);
    };
  }, []);

  const retry = useCallback((): void => {
    window.location.reload();
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === "en" ? "fa" : "en");
  }, []);
  
  // تایپ برای آیتم‌های بارون باینری
  interface BinaryItem {
    id: number;
    value: string;
    delay: string;
    left: string;
    size: string;
    opacity: string;
    speed: string;
  }

  const binaryItems: BinaryItem[] = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    value: Math.random() > 0.5 ? "1" : "0",
    delay: `${Math.random() * 5}s`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 0.6 + 0.8}em`,
    opacity: `${Math.random() * 0.5 + 0.3}`,
    speed: `${Math.random() * 8 + 3}s`,
  }));

  // Static grid lines for cyberpunk effect
  const gridLines = Array.from({ length: 10 }, (_, i) => i);

  const content = translations[language];
  const rtlClass = language === "fa" ? "rtl" : "ltr";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-mono overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      
      {/* Grid lines for cyberpunk effect */}
      <div className="absolute inset-0 z-0">
        {gridLines.map((line) => (
          <div 
            key={`h-${line}`} 
            className="absolute h-px bg-pink-600 opacity-10 w-full" 
            style={{ top: `${line * 10}%` }}
          />
        ))}
        {gridLines.map((line) => (
          <div 
            key={`v-${line}`} 
            className="absolute w-px bg-blue-600 opacity-10 h-full" 
            style={{ left: `${line * 10}%` }}
          />
        ))}
      </div>
      
      {/* Language toggle button */}
      <button 
        onClick={toggleLanguage}
        className="absolute top-4 left-4 glass-effect px-3 py-1 w-24 h-10 rounded-full text-sm z-30 hover:bg-white/10 transition-colors flex items-center justify-center"
      >
        <span className={language === "en" ? "font-persian" : ""}>{language === "en" ? "فارسی" : "English"}</span>
      </button>
      
      {/* Glowing orb background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-600/20 blur-3xl animate-pulse-slow z-0"></div>
      
      {/* Scanner line effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-full h-2 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent absolute" 
             style={{ 
               top: `${(countdown / 5) * 100}%`, 
               animation: 'scanline 5s linear infinite' 
             }}></div>
      </div>
      
      {/* Floating error messages */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {errorCodes.map((code, index) => (
          <div 
            key={code} 
            className="absolute text-xs text-red-500/30"
            style={{
              top: `${(index * 20) + 5}%`,
              left: `${index % 2 === 0 ? 10 : 80}%`,
              transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
              opacity: 0.5
            }}
          >
            {code}
          </div>
        ))}
      </div>
      
      {/* Content container with glass effect */}
      <div className={`z-10 glass-effect rounded-xl p-8 max-w-lg w-full text-center relative overflow-hidden animate-float ${rtlClass}`}>
        <div className="absolute inset-0 bg-shimmer"></div>
        
        {/* Simple 404 without glitch effects */}
        <h1 className="text-8xl md:text-9xl font-bold text-pink-600 mb-2 drop-shadow-[0_0_10px_#ff0066]">
          {content.title}
        </h1>

        {/* Main message */}
        <p className={`text-xl md:text-2xl mt-6 text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ${language === "fa" ? "font-persian" : ""}`}>
          {content.mainMessage}
        </p>

        {/* Sub message */}
        <p className={`text-base md:text-lg text-gray-300 mt-4 text-center px-4 leading-relaxed ${language === "fa" ? "font-persian" : ""}`}>
          {content.subMessage}
        </p>
        
        {/* Loading fake progress bar */}
        <div className="w-full h-1 bg-gray-700 mt-6 rounded overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" 
               style={{ width: `${(5 - countdown) * 20}%` }}></div>
        </div>
        <div className={`flex justify-between text-xs text-gray-500 mt-1 px-1 ${language === "fa" ? "font-persian" : ""}`}>
          <span>{content.systemRebooting}</span>
          <span>{`${(5 - countdown) * 20}%`}</span>
        </div>
        
        {/* Try again button */}
        <button
          onClick={retry}
          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}
          className={`mt-8 px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${language === "fa" ? "font-persian" : ""}`}
        >
          <span className={`absolute inset-0 bg-shimmer ${hoverButton ? 'opacity-100' : 'opacity-0'}`}></span>
          <span className="relative z-10">{content.buttonText}</span>
        </button>
      </div>
      
      {/* بارون باینری */}
      <div className="absolute inset-0 pointer-events-none">
        {binaryItems.map((item) => (
          <span
            key={item.id}
            className="absolute text-green-500 animate-fall"
            style={{
              left: item.left,
              fontSize: item.size,
              opacity: item.opacity,
              animationDelay: item.delay,
              animationDuration: item.speed,
            }}
          >
            {item.value}
          </span>
        ))}
      </div>
      
      {/* Corner hologram effect */}
      <div className="absolute bottom-6 left-6 hidden md:block">
        <div className="w-24 h-24 border border-pink-500/30 rounded-full flex items-center justify-center relative">
          <div className="animate-pulse-slow absolute inset-0 rounded-full border border-pink-500/30"></div>
          <div className="animate-pulse-slow absolute inset-2 rounded-full border border-pink-500/20"></div>
          <div className="text-pink-500/70 text-xs font-bold">ERR_404</div>
        </div>
      </div>
      
      {/* Code snippets decoration */}
      <div className="absolute top-6 right-6 hidden md:block text-xs text-left opacity-40 glass-effect p-2 rounded">
        <pre>
          <code className="text-green-500">
          {`function findPage() {\n  return 404; // error\n}`}
          </code>
        </pre>
      </div>

      {/* Dots pattern overlay */}
      <div className="fixed inset-0 bg-black opacity-20 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      {/* Terminal footer */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/20 text-xs text-green-500/60 z-20 flex items-center justify-between px-4">
        <div className={language === "fa" ? "font-persian" : ""}>{content.footer}</div>
        <div className="flex space-x-4">
          <div>[ x: {Math.floor(Math.random() * 1000)} ]</div>
          <div>[ y: {Math.floor(Math.random() * 1000)} ]</div>
          <div className="animate-pulse">■</div>
        </div>
      </div>
    </div>
  );
}

export default App;
