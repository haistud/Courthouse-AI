import React, { useState } from 'react';
import { Scale, Shield, Gavel, Book, Activity, Cpu, Sword, Calendar, MapPin, AlertCircle } from 'lucide-react';
import { UserRole } from '../services/types';
import { CASE_ARCHIVES } from '../constants';

interface SplashScreenProps {
    onStart: (role: UserRole, caseId: string) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
    const [selectedCaseId, setSelectedCaseId] = useState<string>('gideon');
    const activeCase = CASE_ARCHIVES[selectedCaseId];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-bg-DEFAULT relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="z-10 text-center max-w-5xl w-full animate-fade-in flex flex-col items-center">
                {/* Logo */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm">
                    <Scale className="w-8 h-8 text-accent-primary" />
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-1 bg-gradient-to-br from-accent-primary to-accent-secondary text-transparent bg-clip-text tracking-tight">
                    LEX SIMULACRA
                </h1>
                <p className="font-mono text-accent-secondary/80 tracking-[0.25em] mb-8 text-xs uppercase">
                    AI Courtroom Simulation & archives
                </p>

                {/* Main Selector Deck */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10 text-left max-w-5xl">
                    
                    {/* Cases List Pane (7 cols) */}
                    <div className="lg:col-span-7 bg-bg-paper/40 rounded-2xl border border-slate-700/50 p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                                <Book size={14} className="text-accent-gold" />
                                Court Cases Archive
                            </h3>
                            <span className="text-[10px] font-mono text-slate-500">Select Trial</span>
                        </div>
                        
                        <div className="space-y-3 flex-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                            {Object.values(CASE_ARCHIVES).map((trial) => {
                                const isSelected = selectedCaseId === trial.id;
                                return (
                                    <button
                                        key={trial.id}
                                        onClick={() => setSelectedCaseId(trial.id)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                                            isSelected 
                                                ? 'bg-slate-800/80 border-accent-primary shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                                                : 'bg-slate-900/30 border-slate-800 hover:border-slate-750 hover:bg-slate-800/30'
                                        }`}
                                    >
                                        <div className="space-y-1 pr-4">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                                                    {trial.title}
                                                </h4>
                                                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                                                    trial.id === 'alex' ? 'bg-slate-800 text-slate-400' : 'bg-accent-gold/15 text-accent-gold'
                                                }`}>
                                                    {trial.trialYear.split(' ')[0]}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-400 font-mono truncate max-w-sm md:max-w-md">
                                                Charge: {trial.charge}
                                            </p>
                                        </div>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 transition-all ${
                                            isSelected ? 'border-accent-primary bg-accent-primary text-white' : 'border-slate-700 text-transparent group-hover:border-slate-500'
                                        }`}>
                                            ✓
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Briefing Deck (5 cols) */}
                    <div className="lg:col-span-5 bg-gradient-to-b from-bg-paper to-bg-paper/40 rounded-2xl border border-slate-700/50 p-6 flex flex-col justify-between">
                        <div>
                            <div className="text-xs font-mono text-accent-primary uppercase tracking-widest mb-3">Case Briefing File</div>
                            <h2 className="text-xl font-bold text-white mb-4 line-clamp-2">{activeCase.title}</h2>
                            
                            <div className="space-y-3 text-xs mb-6">
                                <div className="flex items-center gap-2.5 text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/35">
                                    <AlertCircle size={15} className="text-red-400 shrink-0" />
                                    <div>
                                        <span className="text-slate-500 block text-[9px] uppercase font-bold">Charge of Record</span>
                                        <span className="font-semibold">{activeCase.charge}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/35">
                                    <MapPin size={15} className="text-accent-primary shrink-0" />
                                    <div>
                                        <span className="text-slate-500 block text-[9px] uppercase font-bold">Jurisdiction</span>
                                        <span className="font-semibold">{activeCase.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/35">
                                    <Calendar size={15} className="text-accent-secondary shrink-0" />
                                    <div>
                                        <span className="text-slate-500 block text-[9px] uppercase font-bold">Trial / Archive Period</span>
                                        <span className="font-semibold">{activeCase.trialYear}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-2">Simulation Objectives</span>
                            <div className="bg-slate-900/45 p-3 rounded-xl border border-indigo-950/40 text-xs text-slate-400 leading-relaxed max-h-[140px] overflow-y-auto">
                                <span className="font-bold text-accent-primary">Defense Goal:</span> {activeCase.description.defense}
                                <div className="h-px bg-slate-800 my-2"></div>
                                <span className="font-bold text-red-400">Prosecution Goal:</span> {activeCase.description.prosecution}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Role Deck */}
                <div className="w-full max-w-4xl">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Select Litigation Team</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Prosecution Card */}
                        <button 
                            onClick={() => onStart('prosecution', selectedCaseId)}
                            className="group relative overflow-hidden bg-slate-900/30 hover:bg-slate-800/55 border border-slate-750 hover:border-accent-secondary p-6 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1.5 text-left flex items-start gap-4"
                        >
                            <div className="w-12 h-12 bg-red-950/30 border border-red-900/35 rounded-xl flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-900/25 transition-transform shrink-0">
                                <Sword size={22} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors mb-1">State Prosecution</h4>
                                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                                    Acquire the burden of proof. Cross-examine hostile witnesses, expose inconsistencies, and secure a guilty verdict.
                                </p>
                                <span className="text-[10px] font-mono text-accent-secondary uppercase tracking-widest flex items-center gap-1">
                                    Convene Trial <span className="text-sm transition-transform group-hover:translate-x-1 inline-block">→</span>
                                </span>
                            </div>
                        </button>

                        {/* Defense Card */}
                        <button 
                            onClick={() => onStart('defense', selectedCaseId)}
                            className="group relative overflow-hidden bg-slate-900/30 hover:bg-slate-800/55 border border-slate-750 hover:border-accent-primary p-6 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1.5 text-left flex items-start gap-4"
                        >
                            <div className="w-12 h-12 bg-blue-950/30 border border-blue-900/35 rounded-xl flex items-center justify-center text-accent-primary group-hover:scale-110 group-hover:bg-blue-900/25 transition-transform shrink-0">
                                <Shield size={22} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors mb-1">Defense Counsel</h4>
                                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                                    Cast reasonable doubt upon the State's narrative. Suppress faulty evidence and protect fundamental constitutional privileges.
                                </p>
                                <span className="text-[10px] font-mono text-accent-primary uppercase tracking-widest flex items-center gap-1">
                                    Convene Trial <span className="text-sm transition-transform group-hover:translate-x-1 inline-block">→</span>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center gap-8 text-[11px] text-slate-500 mt-12 font-mono border-t border-slate-850 pt-5 w-full max-w-xl">
                    <span className="flex items-center gap-1.5"><Cpu size={14} className="text-accent-primary" /> Adaptive Gemini Engine</span>
                    <span className="flex items-center gap-1.5"><Gavel size={14} className="text-slate-400" /> Historic Records Integration</span>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
