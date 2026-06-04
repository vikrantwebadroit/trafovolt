import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log('Sending message:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would add to Firestore:
    // await addDoc(collection(db, 'contact_messages'), { ...formData, createdAt: serverTimestamp() });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div id="contact-page">
      {/* Header */}
      <section className="pt-40 pb-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Our Experts</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Have a specific requirement or need a consultation? Our engineering team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">Our Location</h4>
                        <p className="text-gray-600 font-medium">Village Maluwal, PO Polian Beet, Distt Una (HP)</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">Call Us</h4>
                        <p className="text-gray-600 font-medium">78071566659</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">Email Us</h4>
                        <p className="text-gray-600 font-medium">trafovolt@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-brand-gray rounded-3xl border border-gray-100">
                  <h4 className="font-bold mb-4">Operating Hours</h4>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
                    <li className="flex justify-between font-bold text-red-500"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-50">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full px-5 py-4 rounded-xl bg-brand-gray border border-transparent focus:border-brand-blue focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 rounded-xl bg-brand-gray border border-transparent focus:border-brand-blue focus:bg-white transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="78071566659"
                        className="w-full px-5 py-4 rounded-xl bg-brand-gray border border-transparent focus:border-brand-blue focus:bg-white transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Your Message</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can we help you?"
                        className="w-full px-5 py-4 rounded-xl bg-brand-gray border border-transparent focus:border-brand-blue focus:bg-white transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-fit bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                      <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                      Thank you for reaching out. We have received your inquiry and our team will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-blue font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-brand-gray grayscale relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
                <MapPin size={48} className="text-brand-blue mx-auto mb-4 animate-bounce" />
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Google Map View - Una, Himachal Pradesh</p>
                <div className="mt-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100 max-w-xs mx-auto">
                    <p className="text-xs text-gray-500 italic">"Located in the serene industrial belts of Maluwal."</p>
                </div>
            </div>
        </div>
        {/* Real iframe if needed */}
        {/* <iframe src="..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
      </section>
    </div>
  );
}
