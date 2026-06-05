import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Zap, CheckCircle } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user has already seen this or opted out
    const hasSeen = localStorage.getItem('newsletter_dismissed');
    
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter_dismissed', 'true');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 4000);
      } else {
        setError(result.error || 'Failed to register subscription. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setError('Unable to connect to service. Please verify your connection status.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white border-2 border-slate-900 shadow-[20px_20px_0px_0px_rgba(15,23,42,1)] overflow-hidden max-w-md w-full relative p-10"
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-black font-bold uppercase text-[10px] tracking-widest underline"
            >
              Close
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-4xl font-black italic uppercase leading-none mb-3">Stay<br />Updated.</h2>
                <p className="text-[10px] text-slate-500 mb-8 uppercase tracking-[0.15em] font-bold">Join our technical research network.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      id="modal-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="FULL NAME"
                      className="w-full border-b-2 border-slate-900 py-3 text-xs tracking-widest focus:outline-none placeholder:text-slate-300 font-bold uppercase"
                      required
                    />
                  </div>
                  <div>
                    <input
                      id="modal-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="EMAIL ADDRESS"
                      className="w-full border-b-2 border-slate-900 py-3 text-xs tracking-widest focus:outline-none placeholder:text-slate-300 font-bold uppercase transition-all"
                      required
                    />
                  </div>
                  
                  {error && <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white py-4 text-xs font-black uppercase tracking-[0.3em] mt-4 hover:bg-brand-blue transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : 'Subscribe to Bulletin'}
                  </button>
                </form>
                <p className="mt-8 text-[9px] text-center text-slate-400 uppercase tracking-widest">
                  Securely managed by Trafovolt Intelligence
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <CheckCircle className="text-brand-blue w-12 h-12 mb-4" />
                <h3 className="text-2xl font-black italic uppercase mb-2">Access Granted</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">You are now part of our R&D network.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
