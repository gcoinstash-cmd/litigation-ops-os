import React, { useState } from 'react';
import { 
  Scale, Shield, Award, Briefcase, FileCheck, ArrowRight, 
  Calendar, DollarSign, Lock, Building2, ChevronRight, Check, 
  CheckCircle2, Sparkles, Plus, BarChart3, Database, FolderLock,
  Gavel, AlertCircle, FileText, Search
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface LitigationCase {
  id: string;
  caseName: string;
  jurisdiction: string;
  claimAmount: string;
  stage: string;
  trialDate: string;
  leadCounsel: string;
  status: string;
  keyIssues: string[];
  image: string;
}

const CASES: LitigationCase[] = [
  {
    id: 'l1',
    caseName: 'Vanguard Energy Corp v. Apex Petrochemical Global',
    jurisdiction: 'U.S. DISTRICT COURT // S.D.N.Y.',
    claimAmount: '$185,000,000 Damages Claim',
    stage: 'Expert Witness Discovery & Daubert Sprints',
    trialDate: 'November 2026 Trial Setting',
    leadCounsel: 'Sullivan & Vance LLP (Special Trial Counsel)',
    status: 'WAR ROOM ACTIVE // FAST TRACK',
    keyIssues: ['Breach of Long-Term Supply Agreement', 'Trade Secret Misappropriation (Offshore Refineries)', 'Forensic Accounting Expert Report Exchanged', 'Motion to Compel Unredacted Executive SMS Granted'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'l2',
    caseName: 'In re: Sovereign Cloudworks Governance Litigation',
    jurisdiction: 'DELAWARE COURT OF CHANCERY',
    claimAmount: '$240,000,000 Derivative Action',
    stage: 'Special Litigation Committee & Dispositive Motions',
    trialDate: 'February 2027 Hearing Window',
    leadCounsel: 'Chancery Trial Advocates PLLC',
    status: 'MEDIATION PROTOCOL ACTIVE',
    keyIssues: ['Breach of Fiduciary Duty of Loyalty (Controller Buyout)', 'Valuation Discount Forensics (Fairness Opinion Audit)', 'Deposition of Board Audit Chair Completed', 'Confidential Data Room Access Under Protective Order'],
    image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'l3',
    caseName: 'NeuralTech IP Holdings v. Quantum Systems Inc.',
    jurisdiction: 'U.S. DISTRICT COURT // W.D. TEX. (PATENT DOCKET)',
    claimAmount: '$155,000,000 Royalty & Injunction',
    stage: 'Markman Claim Construction Order Issued',
    trialDate: 'January 2027 Jury Trial',
    leadCounsel: 'Apex IP Trial Litigators',
    status: 'MARKMAN VICTORY // 4 OF 4 CLAIMS',
    keyIssues: ['Hardware Accelerator Architecture Infringement', 'Willful Infringement Treble Damages Exposure', 'Source Code Inspection Completed Under Clean Room', 'Foreign Companion Action In Unified Patent Court (Munich)'],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<LitigationCase | null>(null);
  const [companyEntity, setCompanyEntity] = useState('');
  const [opposingParty, setOpposingParty] = useState('');
  const [counselEmail, setCounselEmail] = useState('');
  const [claimScale, setClaimScale] = useState('$50M - $150M Dispute');
  const [submitted, setSubmitted] = useState(false);

  // Check URL route for /admin
  React.useEffect(() => {
    if (window.location.pathname.includes('/admin') || window.location.hash.includes('admin')) {
      setIsAdminOpen(true);
    }
  }, []);

  const handleSubmitLitigationInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyEntity || !counselEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCompanyEntity('');
      setCounselEmail('');
      setOpposingParty('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 font-sans selection:bg-rose-500/20 selection:text-rose-400">
      {/* Top Header / Nav */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-700 flex items-center justify-center text-white font-extrabold shadow-lg shadow-rose-600/20">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-rose-500 font-semibold">TRIAL COMMAND & E-DISCOVERY</span>
              <h1 className="text-lg font-bold tracking-tight text-white leading-none">LITIGATION OPS OS</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-zinc-400">
            <a href="#dockets" className="hover:text-rose-400 transition">Active Dockets</a>
            <a href="#warroom" className="hover:text-rose-400 transition">War Room Ops</a>
            <a href="#ediscovery" className="hover:text-rose-400 transition">Forensic E-Discovery</a>
            <a href="#intake" className="hover:text-rose-400 transition">Case Assessment</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 text-xs font-mono uppercase tracking-wider transition flex items-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>[ WAR ROOM PASS ]</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMERCIAL TRIAL WAR ROOM & EVIDENCE VAULT • PRODUCTION GRADE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Winning High-Stakes <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-400">Commercial & Federal Trials</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Autonomous litigation command. Coordinating multi-district complex litigation, trial war room depositions, forensic e-discovery ledgers, and litigation finance syndication.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#intake"
              className="w-full sm:w-auto px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-sm transition shadow-xl shadow-rose-600/20 flex items-center justify-center gap-2"
            >
              <span>Submit Case For Rapid Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-medium rounded-xl text-sm transition flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-rose-400" />
              <span>Counsel War Room Portal</span>
            </button>
          </div>

          {/* Quick Metrics HUD */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Gavel className="w-4 h-4 text-rose-400" />
                <span>ACTIVE CLAIMS</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">$580 Million</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">11 Federal Actions</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <FileCheck className="w-4 h-4 text-rose-400" />
                <span>SUMMARY JUDGMENTS</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">87.5%</p>
              <p className="text-[11px] text-rose-400 mt-0.5">Pre-Trial Dispositive Win Rate</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <FolderLock className="w-4 h-4 text-rose-400" />
                <span>E-DISCOVERY VAULT</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">4.8M Docs</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">SHA-256 Hash Verified</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <DollarSign className="w-4 h-4 text-rose-400" />
                <span>VERDICTS & SETTLEMENTS</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">$1.2 Billion</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">Cumulative Recoveries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active High-Stakes Dockets */}
      <section id="dockets" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400">FEDERAL DOCKET PIPELINE</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Active Complex Litigation</h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              High-exposure commercial disputes pending in federal district courts and the Delaware Court of Chancery.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
              3 TRIAL SPRINT CYCLES ACTIVE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASES.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#121214] border border-zinc-800 hover:border-rose-500/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.caseName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/50 to-transparent"></div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 border border-zinc-700 text-[10px] font-mono font-bold text-rose-400">
                  {item.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">{item.jurisdiction}</span>
                  <h4 className="text-xl font-bold text-white mt-1 group-hover:text-rose-300 transition-colors">{item.caseName}</h4>

                  <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Dispute Value:</span>
                      <span className="font-semibold text-rose-400">{item.claimAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Trial Setting:</span>
                      <span className="font-semibold text-white">{item.trialDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Procedural Stage:</span>
                      <span className="font-semibold text-zinc-300">{item.stage}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    {item.keyIssues.map((issue, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <button 
                    onClick={() => setSelectedCase(item)}
                    className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-rose-500/50 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>View Trial Docket Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trial War Room Capabilities */}
      <section id="warroom" className="py-20 px-6 bg-[#0E0E10] border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400">TRIAL WAR ROOM PROTOCOL</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Courtroom-Ready Operations Architecture</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Replacing cumbersome binders and disparate vendors with a unified, high-security digital cockpit built for trial verdicts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#121214] border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Live Deposition Sync</h4>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Real-time synchronized video and rough ASCII transcript streaming directly into lead counsel's iPad in the courtroom. Instant cross-examination impeachment clips.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#121214] border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6">
                <FolderLock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Cryptographic Bates Chain</h4>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Immutable SHA-256 hash tracking for every electronic record produced in discovery. Absolute evidentiary admissibility defense against spoliation motions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#121214] border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Litigation Funding Syndication</h4>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Non-recourse commercial litigation capital facilities. Off-balance-sheet fee advances, adverse cost protection wraps, and expert witness war chests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Intake Form */}
      <section id="intake" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-[#121214] border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400">RAPID TRIAL AUDIT</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Submit Dispute For Case Assessment</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Strictly confidential evaluation covered by attorney-client privilege. Rapid conflict clearing within 4 business hours.
            </p>
          </div>

          <form onSubmit={handleSubmitLitigationInquiry} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Claimant / Corporate Entity</label>
                <input
                  type="text"
                  required
                  value={companyEntity}
                  onChange={(e) => setCompanyEntity(e.target.value)}
                  placeholder="e.g. Apex Strategic Industries Inc."
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Adverse / Opposing Party</label>
                <input
                  type="text"
                  required
                  value={opposingParty}
                  onChange={(e) => setOpposingParty(e.target.value)}
                  placeholder="e.g. Global Titan Logistics LLC"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Lead Counsel / GC Email</label>
                <input
                  type="email"
                  required
                  value={counselEmail}
                  onChange={(e) => setCounselEmail(e.target.value)}
                  placeholder="general.counsel@enterprise.com"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Estimated Claim Size</label>
                <select
                  value={claimScale}
                  onChange={(e) => setClaimScale(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-rose-500"
                >
                  <option>$10M - $50M Commercial Dispute</option>
                  <option>$50M - $150M Federal Action</option>
                  <option>$150M+ Nine-Figure Bet-The-Company Trial</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2"
              >
                <span>Initiate Privileged Conflict Check & Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Submission received under Attorney-Client Privilege. Conflict clearing desk has initiated review.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Confidential Docket Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121214] border border-rose-500/30 rounded-2xl p-6 sm:p-8 max-w-lg w-full text-zinc-100 relative">
            <h4 className="text-xl font-bold text-white">{selectedCase.caseName}</h4>
            <p className="text-xs text-rose-400 font-mono mt-1">{selectedCase.jurisdiction}</p>

            <div className="my-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-500">Damages Sought:</span>
                <span className="text-rose-400 font-bold">{selectedCase.claimAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Trial Setting:</span>
                <span className="text-white font-semibold">{selectedCase.trialDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Current Status:</span>
                <span className="text-amber-400 font-semibold">{selectedCase.status}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-500 mb-6">
              Complete privileged docket entries, expert work product, and deposition clips require lead counsel authorization.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  alert("Encrypted docket brief dispatched to authorized litigation team.");
                  setSelectedCase(null);
                }}
                className="flex-1 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs transition"
              >
                Access War Room Docket
              </button>
              <button
                onClick={() => setSelectedCase(null)}
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Portal Modal */}
      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800/80 bg-[#0A0A0B] text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-black">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white tracking-wide">LITIGATION OPS OS</p>
              <p className="text-[11px] text-zinc-500">High-Stakes Commercial Trial & E-Discovery Command Center</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-rose-400 hover:underline font-mono"
            >
              Counsel War Room Door (Cheat Code: litigation2026)
            </button>
            <span>•</span>
            <span>Supabase RLS Ready</span>
            <span>•</span>
            <span>Ghost Factory™ Tier-1 Asset</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
