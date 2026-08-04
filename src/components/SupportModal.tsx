import React, { useState } from 'react';
import { CHURCH_INFO } from '../data/churchData';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState<string>('1000');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [phone, setPhone] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const selectedFinalAmount = amount === 'custom' ? (customAmount || '0') : amount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#c3c8c1] p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#747872] hover:text-[#1c1c18] p-2 rounded-full hover:bg-[#e5e2dc] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#d7e7d1] text-[#546251] mb-3">
                <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
              </div>
              <h3 className="font-headline-lg text-[26px] text-[#475749]">Support Our Mission</h3>
              <p className="font-body-md text-sm text-[#434843] mt-1">
                Your tithes and offerings help spread God's Word, provide community shelter, food relief, and medical aid in Mumias.
              </p>
            </div>

            <form onSubmit={handleDonate} className="space-y-5">
              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold text-[#1c1c18] uppercase tracking-wider mb-2">
                  Select Donation Amount (KSh)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['500', '1000', '2500', '5000'].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => {
                        setAmount(val);
                        setCustomAmount('');
                      }}
                      className={`py-2 px-1 rounded-lg text-sm font-semibold border transition-all cursor-pointer ${
                        amount === val
                          ? 'bg-[#475749] text-white border-[#475749]'
                          : 'bg-[#f0eee8] text-[#1c1c18] border-[#c3c8c1] hover:bg-[#e5e2dc]'
                      }`}
                    >
                      KSh {val}
                    </button>
                  ))}
                </div>

                <div className="mt-2">
                  <input
                    type="number"
                    placeholder="Or enter custom amount in KSh..."
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('custom');
                    }}
                    className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#546251] focus:outline-none"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-xs font-bold text-[#1c1c18] uppercase tracking-wider mb-2">
                  Payment Option
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mpesa')}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg border text-sm font-bold transition-all cursor-pointer ${
                      paymentMethod === 'mpesa'
                        ? 'bg-[#d7e7d1] text-[#121f11] border-[#546251]'
                        : 'bg-[#f0eee8] text-[#434843] border-[#c3c8c1]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">phone_iphone</span>
                    <span>M-Pesa STK Push</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg border text-sm font-bold transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-[#d7e7d1] text-[#121f11] border-[#546251]'
                        : 'bg-[#f0eee8] text-[#434843] border-[#c3c8c1]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">credit_card</span>
                    <span>Credit / Debit Card</span>
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1c1c18] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#546251] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1c1c18] mb-1">
                    {paymentMethod === 'mpesa' ? 'M-Pesa Phone Number' : 'Phone / Email'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={paymentMethod === 'mpesa' ? 'e.g. 0712345678' : 'Your phone or email'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#546251] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1c1c18] mb-1">
                    Prayer Note / Blessing Message (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="May God bless this offering for..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#c3c8c1] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#546251] focus:outline-none"
                  />
                </div>
              </div>

              {/* Manual Paybill Instructions */}
              <div className="p-3 bg-[#e8e2d3] rounded-lg text-xs text-[#1e1c12] space-y-1 border border-[#ccc6b8]">
                <p className="font-bold">Direct Paybill Instructions:</p>
                <p>1. Go to M-Pesa Menu &gt; Lipa na M-Pesa &gt; Paybill</p>
                <p>2. Enter Business No: <strong className="font-bold text-[#475749]">{CHURCH_INFO.mPesaPaybill}</strong></p>
                <p>3. Enter Account No: <strong className="font-bold text-[#475749]">{CHURCH_INFO.mPesaAccount}</strong></p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#475749] text-white py-3 rounded-full font-label-sm text-[15px] hover:bg-[#5f6f60] transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Processing prompt...</span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                    <span>Donate KSh {selectedFinalAmount} Now</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#d7e7d1] text-[#121f11] rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="font-headline-lg text-[26px] text-[#475749]">May God Bless Your Generosity!</h3>
            <p className="font-body-md text-sm text-[#434843]">
              Thank you <strong className="text-[#1c1c18]">{donorName || 'Beloved'}</strong> for supporting
              The New Covenant Church of Africa Alpha and Omega with your offering of <strong>KSh {selectedFinalAmount}</strong>.
            </p>
            {paymentMethod === 'mpesa' && (
              <p className="text-xs bg-[#f6f3ed] p-3 rounded-lg text-[#565348] border border-[#c3c8c1]">
                An M-Pesa prompt has been dispatched to <strong>{phone}</strong>. Please enter your M-Pesa PIN on your mobile device to complete the offering.
              </p>
            )}
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#475749] text-white px-8 py-2.5 rounded-full font-label-sm text-sm hover:bg-[#5f6f60] transition-colors cursor-pointer mt-4"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
