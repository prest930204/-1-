import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Crown, Sparkles, Trophy, ArrowRight, Info, Shield, Swords, Gem } from 'lucide-react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // RPG Corner Brackets Component for Quest-board style cards
  const CornerBrackets = ({ color = "border-cyan-800/50", hover = "group-hover:border-cyan-400/80" }) => (
    <>
      <div className={`absolute top-0 left-0 w-3 md:w-5 h-3 md:h-5 border-t-[2px] border-l-[2px] ${color} ${hover} transition-colors duration-500 z-10`} />
      <div className={`absolute top-0 right-0 w-3 md:w-5 h-3 md:h-5 border-t-[2px] border-r-[2px] ${color} ${hover} transition-colors duration-500 z-10`} />
      <div className={`absolute bottom-0 left-0 w-3 md:w-5 h-3 md:h-5 border-b-[2px] border-l-[2px] ${color} ${hover} transition-colors duration-500 z-10`} />
      <div className={`absolute bottom-0 right-0 w-3 md:w-5 h-3 md:h-5 border-b-[2px] border-r-[2px] ${color} ${hover} transition-colors duration-500 z-10`} />
    </>
  );

  const OrnateDivider = () => (
    <div className="flex items-center justify-center gap-2 md:gap-4 py-16 w-full opacity-80 pointer-events-none">
      <div className="h-[1px] w-24 md:w-32 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37]/80" />
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rotate-45 border-2 border-cyan-500/80 shadow-[0_0_10px_rgba(6,182,212,0.5)] bg-slate-950" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37]/80" />
      <div className="h-[1px] w-24 md:w-32 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#030408] text-slate-200 font-serif selection:bg-cyan-900 selection:text-white pb-10 relative">
      
      {/* Intro Black Screen Veil */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="fixed inset-0 z-50 bg-black pointer-events-none"
      />

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-fantasy-purple blur-[150px] rounded-full mix-blend-screen" 
         />
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-fantasy-cyan blur-[120px] rounded-full mix-blend-screen" 
         />
         {/* Subtle texture overlay */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center pt-16 relative">
          
          {/* EPIC RISING MOON */}
          <motion.div 
            initial={{ y: "70vh", scale: 0.3, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }} 
            className="relative flex justify-center items-center mb-16 mt-8"
          >
            {/* Mystical Aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
               <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full shadow-[0_0_120px_rgba(59,130,246,0.15)] animate-[pulse_6s_ease-in-out_infinite]" />
               <div className="w-[320px] h-[320px] md:w-[430px] md:h-[430px] rounded-full shadow-[inset_0_0_80px_rgba(59,130,246,0.05)]" />
            </div>

            {/* SVG Mask Definition for Crescent */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <mask id="crescent-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                  <rect width="1" height="1" fill="white" />
                  <circle cx="0.75" cy="0.5" r="0.6" fill="black" />
                </mask>
              </defs>
            </svg>

            <div 
              className="w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center z-10"
              style={{ filter: "drop-shadow(0px 0px 30px rgba(59,130,246,0.6)) drop-shadow(0px 0px 10px rgba(255,255,255,0.2))" }}
            >
              <div 
                className="w-full h-full relative"
                style={{ WebkitMask: "url(#crescent-mask)", mask: "url(#crescent-mask)" }}
              >
                <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-slate-200 via-blue-200 to-indigo-900 rounded-full border-[1px] border-blue-100/50" />
                <div className="w-full h-full absolute inset-0 mix-blend-overlay opacity-90 rounded-full" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(255,255,255,1) 0%, transparent 50%, rgba(0,0,0,1) 100%)" }} />
                <div className="w-full h-full absolute inset-0 opacity-60 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] rounded-full" />
                <div className="w-full h-full absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] rounded-full" />
              </div>
            </div>
            
            {/* Ambient magic particles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
               <Sparkles className="absolute top-0 right-4 text-cyan-200 w-6 h-6 animate-pulse" />
               <Sparkles className="absolute bottom-6 -left-6 text-cyan-400 w-5 h-5 animate-pulse" style={{ animationDelay: '1s' }} />
               <Sparkles className="absolute -top-10 left-1/2 text-white w-4 h-4 animate-pulse opactiy-60" style={{ animationDelay: '2.5s' }} />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1.2 }}
            className="text-center space-y-6 relative z-30"
          >
            <span className="inline-flex items-center gap-2 px-6 py-1.5 border border-[#D4AF37]/50 bg-[#070b15]/80 backdrop-blur-md rounded-none text-[#D4AF37] text-xs md:text-sm tracking-[0.25em] font-semibold uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)] relative">
              <div className="absolute top-0 left-0 w-1 h-1 bg-[#D4AF37]" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-[#D4AF37]" />
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#D4AF37]" />
              <Crown className="w-4 h-4" /> 시즌1 : Who is the First champion
            </span>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6 drop-shadow-2xl tracking-tighter"
                style={{ 
                  background: "linear-gradient(to bottom, #FFFFFF, #D4AF37, #AA7C11)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0px 4px 20px rgba(212,175,55,0.3))"
                }}>
              더문짐 <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-700">&</span> 그룹PT
            </h1>
          </motion.div>
        </section>

        <OrnateDivider />

        {/* SECTION 1: POINT SYSTEM & REWARDS */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="space-y-16 max-w-3xl mx-auto"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />
              01. 운동을 참여하고 단계를 올려보세요
            </h2>
            <p className="text-slate-400 text-sm md:text-base break-keep">
              꾸준한 노력은 눈부신 보상으로 돌아옵니다. 달성 단계에 따른 특별한 영예를 확인하세요.
            </p>
          </div>

          <div className="relative border-l-[2px] border-cyan-900/60 shadow-[0_0_15px_rgba(6,182,212,0.1)] ml-4 md:ml-12 space-y-10 pb-4">
            
            <RewardItem 
              phase="초승달" 
              level={1}
              desc="시즌 퀘스트 시작 (보상 없음)"
              moonClass="shadow-[-4px_0_0_0_rgba(200,200,220,0.8)] bg-transparent" 
            />
            
            <RewardItem 
              phase="상현달" 
              level={2}
              desc="친구 초대권 3회 획득"
              moonClass="bg-gradient-to-r from-[rgba(200,200,220,0.9)] to-transparent via-transparent 50% border border-[rgba(200,200,220,0.2)]"
            />
            
            <RewardItem 
              phase="차오르는 달" 
              level={3}
              desc="회원권 1주일 추가"
              moonClass="bg-gradient-to-r from-[rgba(200,200,220,1)] to-[rgba(200,200,220,0.4)] border border-[rgba(200,200,220,0.4)]"
            />
            
            <RewardItem 
              phase="보름달" 
              level={4}
              desc="6개월권 이상 구매 시 5% 할인 (선 구매 시 페이백 할인)"
              moonClass="bg-[#f1f5f9] shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              glow
            />
            
            {/* Phase 5 Legendary Card */}
            <div className="relative pl-8 md:pl-12">
              {/* Moon Node */}
              <div className="absolute -left-6 md:-left-[28px] top-1/2 -translate-y-1/2 bg-[#030408] py-4 z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-300 to-indigo-800 shadow-[0_0_30px_rgba(59,130,246,0.6),inset_0_0_10px_rgba(255,255,255,0.8)] border-[2px] border-[#D4AF37] flex items-center justify-center animate-[pulse_3s_infinite]">
                  <div className="w-full h-full absolute inset-0 rounded-full mix-blend-overlay opacity-80" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 60%, rgba(0,0,60,0.8) 100%)" }} />
                  <div className="w-full h-full absolute inset-0 rounded-full opacity-50 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#10081d] to-[#040915] border border-[#D4AF37]/50 rounded-sm p-6 md:p-8 shadow-[0_0_40px_rgba(212,175,55,0.15),inset_0_0_20px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                <CornerBrackets color="border-[#D4AF37]/70" hover="group-hover:border-[#D4AF37]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full"></div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] flex items-center gap-3 mb-6 relative z-10 tracking-wide">
                  <div className="p-1.5 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-sm shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                     <Gem className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  블루문 <span className="text-xs md:text-sm font-normal text-[#D4AF37]/60 ml-2 font-mono tracking-widest">[LEVEL 5]</span>
                </h3>
                
                <ul className="space-y-4 text-sm md:text-base text-cyan-50 relative z-10 font-medium">
                  <li className="flex items-start gap-4 p-3 bg-white/5 border border-white/10 rounded-sm">
                    <span className="text-cyan-400 mt-0.5"><Sparkles className="w-5 h-5"/></span> 
                    <span>6개월권 이상 구매 시 <strong className="text-white text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">10% 폭발적 할인</strong><br/><span className="text-xs text-cyan-300/60 font-normal">선 구매 후 달성 시 페이백 지급</span></span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-sm">
                    <span className="text-[#D4AF37] mt-0.5"><Crown className="w-5 h-5"/></span>
                    <span>위대한 영웅으로 <strong className="text-[#D4AF37] text-lg">명예의 전당 영구 등재</strong></span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-blue-900/10 border border-blue-500/20 rounded-sm">
                    <span className="text-blue-400 mt-0.5"><Swords className="w-5 h-5"/></span>
                    <span>시즌1 첫번째 챔피언 특별 <strong className="text-blue-300">우승 뱃지 부여</strong></span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </motion.section>

        <OrnateDivider />

        {/* SECTION 2: TITLES */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-b from-[#0e121a]/90 to-[#05080d]/90 border border-slate-700/60 rounded-sm p-8 md:p-14 text-center relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] max-w-4xl mx-auto"
        >
          <CornerBrackets color="border-slate-500" hover="group-hover:border-cyan-500" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none" />
          
          <div className="absolute -top-10 -right-10 opacity-5"><Trophy className="w-64 h-64 rotate-12" /></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10 flex items-center justify-center gap-3">
             <Swords className="w-6 h-6 md:w-8 md:h-8 text-cyan-500" />
             02. 고유한 칭호 획득
          </h2>
          
          <p className="text-slate-400 break-keep leading-relaxed relative z-10 text-sm md:text-base max-w-xl mx-auto mb-10">
            당신의 성장에 따라 <strong className="text-slate-200">고유한 칭호</strong>가 개방됩니다.<br/>
            선택받은 자의 칭호로 나만의 대시보드를 영광스럽게 장식하세요!
          </p>
          
          {/* RPG Soul Tags */}
          <div className="flex flex-wrap justify-center gap-4 relative z-10 p-2 md:p-6">
             
             <span className="relative px-5 py-2.5 bg-[#1a1f2b] border border-slate-600 text-xs md:text-sm text-slate-300 shadow-[inset_0_0_15px_rgba(0,0,0,0.8),0_4px_10px_rgba(0,0,0,0.3)] hover:border-slate-400 transition-colors cursor-default">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-slate-500" />
                <span className="relative z-10 font-bold tracking-widest uppercase">#도전자</span>
             </span>
             
             <span className="relative px-5 py-2.5 bg-[#171328] border border-indigo-700 text-xs md:text-sm text-indigo-300 shadow-[inset_0_0_15px_rgba(0,0,0,0.8),0_4px_10px_rgba(55,48,163,0.3)] hover:border-indigo-400 transition-colors cursor-default">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500" />
                <span className="relative z-10 font-bold tracking-widest uppercase text-shadow-[0_0_8px_rgba(99,102,241,0.8)]">#승부사</span>
             </span>
             
             <span className="relative px-5 py-2.5 bg-[#0a1e28] border border-cyan-500 text-xs md:text-sm text-cyan-200 shadow-[inset_0_0_20px_rgba(6,182,212,0.2),0_0_15px_rgba(6,182,212,0.4)] hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all cursor-default">
                <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)]" />
                <span className="relative z-10 font-bold tracking-widest uppercase drop-shadow-[0_0_5px_rgba(6,182,212,1)]">#강철_멘탈</span>
             </span>
             
             <span className="relative px-5 py-2.5 bg-[#251012] border border-rose-800 text-xs md:text-sm text-rose-300 shadow-[inset_0_0_15px_rgba(0,0,0,0.8),0_4px_10px_rgba(159,18,57,0.3)] hover:border-rose-500 transition-colors cursor-default">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-rose-600" />
                <span className="relative z-10 font-bold tracking-widest uppercase">#강철_심장</span>
             </span>
             
          </div>
        </motion.section>

        {/* SECTION 3: RETURN BENEFIT (ROYAL DECREE) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-32 max-w-3xl mx-auto pb-20"
        >
          {/* Glowing Aura for Emphasis */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/10 via-red-800/40 to-[#D4AF37]/10 blur-[20px] opacity-70 animate-pulse pointer-events-none"></div>
          
          <div className="bg-[#0b0304] border-[1px] border-red-900/80 p-6 md:p-14 relative overflow-hidden flex flex-col items-center text-center shadow-[0_15px_50px_rgba(153,27,27,0.2)]">
            
            <CornerBrackets color="border-[#D4AF37]/60" hover="border-[#D4AF37]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />
            
            {/* Top gold accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40"></div>
            
            <div className="flex items-center gap-2 px-5 py-2 bg-red-950/80 text-red-300 text-xs md:text-sm font-bold tracking-widest border border-red-800/80 rounded-sm mb-8 shadow-[0_0_20px_rgba(220,38,38,0.3)] relative z-10">
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-red-400" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-red-400" />
              <Sparkles className="w-4 h-4 text-[#D4AF37]" /> 특별 복귀 퀘스트
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight relative z-10 tracking-tight">
              복귀 유저 특별 혜택
            </h2>
            <h3 className="text-xl md:text-2xl text-[#D4AF37] font-bold mb-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] relative z-10">
               무료로 시즌을 준비하라
            </h3>

            {/* Quest Board Paper Style */}
            <div className="bg-[#140608]/90 w-full p-6 md:p-8 border-y-2 border-red-900/50 mb-10 relative shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] z-10">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-red-500/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-red-500/30" />
              
              <Info className="absolute top-4 left-4 w-5 h-5 text-red-500/40" />
              <p className="text-slate-200 leading-loose break-keep text-sm md:text-lg">
                2026년 6월 1일부터 개방되는 <strong className="text-red-400 font-black">시즌 참여 전, 사전등록</strong>을 완수하면<br/>
                <span className="inline-block mt-6 px-4 py-3 bg-red-950/80 border border-red-800/80 rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                   <strong className="text-red-100 text-xl md:text-[24px] font-black tracking-tight" style={{textShadow: "0 0 10px rgba(220,38,38,0.8)"}}>
                     5월 마지막 주는 센터 전면 무료 입장!
                   </strong>
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full relative z-10">
               <a 
                 href="tel:050713702206" 
                 className="group relative flex items-center justify-center gap-3 bg-[#111] hover:bg-[#1a1a1a] text-slate-200 py-4 font-bold border border-slate-700 shadow-md transition-all rounded-sm overflow-hidden"
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-900/10 to-red-900/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Phone className="w-5 h-5 text-slate-400" /> 상담 신청하기<br/><span className="text-xs font-normal text-slate-500 ml-2 hidden md:inline font-mono">(0507-1370-2206)</span>
               </a>
               <a 
                 href="https://map.naver.com/p/entry/place/1973053063?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=126.6777940&lat=37.6375547"
                 target="_blank" rel="noopener noreferrer"
                 className="group relative flex items-center justify-center gap-3 bg-gradient-to-br from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white py-4 font-bold shadow-[0_0_20px_rgba(153,27,27,0.4)] transition-all hover:scale-[1.02] border border-red-500/50 rounded-sm"
               >
                 <span className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                 예약 방문하기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-slate-400 text-xs md:text-sm bg-black/60 px-6 py-4 border border-[#D4AF37]/20 relative z-10 rounded-sm shadow-inner">
              <MapPin className="w-4 h-4 text-[#D4AF37]/60" />
              <span>김포시 장기동 태장로 808 송호프라자 2층 더문짐&그룹PT</span>
            </div>
            
          </div>
        </motion.section>

      </div>
    </div>
  );
}

// Subcomponent for Timeline Reward Items
function RewardItem({ phase, level, desc, moonClass, glow = false }: { phase: string, level: number, desc: string, moonClass: string, glow?: boolean }) {
  // RPG Corner Brackets Component
  const SmallCornerBrackets = () => (
    <>
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-600 transition-colors duration-500 group-hover:border-cyan-400/80 z-10" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-600 transition-colors duration-500 group-hover:border-cyan-400/80 z-10" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-600 transition-colors duration-500 group-hover:border-cyan-400/80 z-10" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-600 transition-colors duration-500 group-hover:border-cyan-400/80 z-10" />
    </>
  );

  return (
    <div className="relative pl-8 md:pl-14 group">
      {/* Timeline Celestial Icon */}
      <div className="absolute -left-4 md:-left-[20px] top-1/2 -translate-y-1/2 bg-[#030408] py-2 z-10 transition-transform duration-300 group-hover:scale-110">
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${glow ? 'shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-[#050810] border border-cyan-500' : 'bg-[#050810] border border-slate-700'}`}>
           <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${moonClass}`} />
        </div>
      </div>
      
      {/* RPG Quest Card */}
      <div className="bg-[#0b101c]/80 border border-slate-700/60 rounded-sm p-5 md:p-6 transition-all duration-300 group-hover:bg-[#0c1322] group-hover:border-cyan-800/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] relative">
         <SmallCornerBrackets />
         
         <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
         
         <h3 className="text-slate-100 font-bold mb-3 flex items-center gap-3 relative z-10">
            <span className="text-[10px] md:text-xs bg-slate-900 border border-slate-700 text-cyan-500/80 px-2 py-0.5 font-mono tracking-wider shadow-inner shadow-black">
              LEVEL {level}
            </span>
            <span className="text-base md:text-lg tracking-wide">{phase}</span>
         </h3>
         <p className={`text-sm md:text-base leading-relaxed break-keep relative z-10 ${glow ? 'text-white font-medium drop-shadow-md' : 'text-slate-400'}`}>
            {desc}
         </p>
      </div>
    </div>
  );
}

