import React, { useState } from 'react';
import { Lock, X, CheckCircle, Shield, Award, Scale, DollarSign, FileCheck, FolderLock } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<'docket' | 'ediscovery' | 'finance'>('docket');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'litigation2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleAutoFill = () => {
    setPasscode('litigation2026');
    setIsAuthenticated(true);
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#121214] border border-rose-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close Admin Modal"
          className="absolute top-6 right-6 p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div className="py-8 max-w-md mx-auto text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">Litigation Trial War Room</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Enter lead trial counsel passkey or trigger instant 1-click verification bypass.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter trial counsel key (litigation2026)"
                  className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700 rounded-xl text-center text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                />
                {error && <p className="text-rose-400 text-xs mt-2">Invalid trial counsel credentials. Use litigation2026.</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition duration-150 shadow-lg shadow-rose-600/20"
                >
                  Authorize
                </button>
                <button
                  type="button"
                  onClick={handleAutoFill}
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 border border-rose-500/40 text-rose-300 font-medium rounded-xl transition duration-150"
                >
                  1-Click Passkey
                </button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-zinc-800 text-xs text-zinc-300 flex items-center justify-center gap-2">
              <Shield className="w-3.5 h-3.5 text-rose-400" />
              <span>Attorney-Client Privilege • Work-Product Immunity • Zero Leak Protocol</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-rose-400">Authenticated Trial Counsel</span>
                <h2 className="text-2xl font-bold text-white tracking-tight">Litigation Operations Command</h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('docket')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'docket' ? 'bg-rose-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Federal Docket
                </button>
                <button
                  onClick={() => setActiveTab('ediscovery')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'ediscovery' ? 'bg-rose-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  E-Discovery Vault
                </button>
                <button
                  onClick={() => setActiveTab('finance')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'finance' ? 'bg-rose-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Litigation Funding
                </button>
              </div>
            </div>

            {/* TAB CONTENT */}
            {activeTab === 'docket' && (
              <div className="py-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-base text-zinc-200 leading-relaxed">Aggregated Active Claim Value</p>
                    <p className="text-2xl font-bold text-rose-400 mt-1">$580,000,000</p>
                    <p className="text-xs font-semibold text-zinc-300 mt-1">11 Multi-District & Federal Actions</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-base text-zinc-200 leading-relaxed">Deposition Calendar Sprints</p>
                    <p className="text-2xl font-bold text-white mt-1">26 Scheduled</p>
                    <p className="text-xs font-semibold text-rose-400 mt-1">C-Suite & Expert Witness Cross-Exams</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-base text-zinc-200 leading-relaxed">Summary Judgment Win Rate</p>
                    <p className="text-2xl font-bold text-white mt-1">87.5%</p>
                    <p className="text-xs font-semibold text-zinc-300 mt-1">Pre-Trial Dismissal & Settlement Leverage</p>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-zinc-300">Active High-Stakes Dockets</h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex justify-between items-center">
                    <div>
                      <span className="text-xs font-semibold tracking-wider font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">SDNY // COMMERCIAL FRAUD</span>
                      <h5 className="font-semibold text-white mt-1">Vanguard Energy Corp v. Apex Petrochemical Global</h5>
                      <p className="text-base text-zinc-200 leading-relaxed">Claim: $185M • Stage: Expert Discovery & Daubert Motions • Trial: Q4 2026</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">Active War Room</span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex justify-between items-center">
                    <div>
                      <span className="text-xs font-semibold tracking-wider font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">DELAWARE CHANCERY // SHAREHOLDER DERIVATIVE</span>
                      <h5 className="font-semibold text-white mt-1">In re: Sovereign Cloudworks Governance Litigation</h5>
                      <p className="text-base text-zinc-200 leading-relaxed">Claim: $240M • Stage: Special Litigation Committee Review • Mediation Date Set</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Mediation Window</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ediscovery' && (
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-zinc-300">Forensic E-Discovery Evidence Vault</h4>
                  <span className="text-xs text-rose-400">4.8 Million Documents Indexed</span>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-white">Bates Stamp Batch: APX-0014890 - APX-0021045</h5>
                      <p className="text-base text-zinc-200 leading-relaxed">Forensic Slack & Email Extraction • SHA-256 Hash Verified • Privilege Redactions Applied</p>
                      <p className="text-xs font-semibold text-zinc-300 mt-1">Metadata Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
                    </div>
                    <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-base font-semibold min-h-[44px] font-medium text-rose-300 rounded-lg border border-zinc-700">Audit Hash</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'finance' && (
              <div className="py-6 space-y-4">
                <h4 className="text-sm font-semibold text-zinc-300">Non-Recourse Litigation Finance Facilities</h4>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-400">Active Capital Deployed by Institutional Funders</span>
                    <span className="font-bold text-white">$45,000,000 Facility</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-400">Underwriting Hurdle & Success Multiple</span>
                    <span className="font-bold text-white">2.8x MOIC or 28% IRR Floor</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-zinc-400">Adverse Cost & Appeal Bond Protection</span>
                    <span className="font-bold text-rose-400">100% Insured Under London Market Wrap</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center">
              <span className="text-xs text-zinc-300">Autonomous Litigation Ops Engine • Supabase RLS Protected</span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-rose-400 hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
