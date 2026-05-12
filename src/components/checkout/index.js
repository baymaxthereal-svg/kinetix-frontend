import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function CheckOut() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    facilityName: "",
    address: "",
    city: "",
    postalCode: "",
  });
  
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadError, setUploadError] = useState("");
  
  // Step completion states
  const [shippingCompleted, setShippingCompleted] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [reviewCompleted, setReviewCompleted] = useState(false);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? (subtotal >= 300 ? 0 : 12) : 0;
  const total = subtotal + shipping;
  const advancePayment = total * 0.5;
  const remainingPayment = total * 0.5;
  
  // Check shipping details completion
  useEffect(() => {
    const isShippingComplete = formData.firstName && formData.lastName && formData.address && formData.city;
    setShippingCompleted(isShippingComplete);
  }, [formData.firstName, formData.lastName, formData.address, formData.city]);
  
  // Check payment completion (file uploaded)
  useEffect(() => {
    setPaymentCompleted(!!uploadedFile);
  }, [uploadedFile]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
      if (validTypes.includes(file.type)) {
        setUploadedFile(file);
        setUploadError("");
        if (file.type.startsWith("image/")) {
          const url = URL.createObjectURL(file);
          setPreviewUrl(url);
        } else {
          setPreviewUrl(null);
        }
      } else {
        setUploadError("Please upload PNG, JPG, or PDF file");
        setUploadedFile(null);
        setPreviewUrl(null);
      }
    }
  };
  
  const handleRemoveFile = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    setUploadError("");
    const fileInput = document.getElementById("payment-upload");
    if (fileInput) fileInput.value = "";
  };
  
  const handleReviewOrder = async () => {
    if (!shippingCompleted) {
      Swal.fire("Incomplete Information", "Please fill in all required shipping details (First Name, Last Name, Address, City).", "warning");
      return;
    }
    if (!paymentCompleted) {
      Swal.fire("Payment Confirmation Required", "Please upload your payment confirmation.", "warning");
      return;
    }
    
    // Build order items table with defined column widths
    const orderItemsRows = cartItems.map(item => `
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px; text-align: left; width: 50%;">${item.title}</td>
        <td style="padding: 8px; text-align: center; width: 15%;">${item.quantity}</td>
        <td style="padding: 8px; text-align: right; width: 15%;">$${Number(item.price).toFixed(2)}</td>
        <td style="padding: 8px; text-align: right; width: 20%;">$${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `).join("");
    
    // Payment confirmation preview
    let paymentPreviewHtml = "";
    if (uploadedFile) {
      if (uploadedFile.type.startsWith("image/")) {
        const objectUrl = URL.createObjectURL(uploadedFile);
        paymentPreviewHtml = `
          <div style="margin-top: 10px;">
            <strong>Payment Confirmation:</strong><br>
            <img src="${objectUrl}" style="max-width: 100%; max-height: 150px; border-radius: 8px; margin-top: 5px; border: 1px solid #ddd;" />
            <p style="font-size: 12px; margin-top: 5px;">${uploadedFile.name}</p>
          </div>
        `;
        setTimeout(() => URL.revokeObjectURL(objectUrl), 100);
      } else {
        paymentPreviewHtml = `
          <div style="margin-top: 10px;">
            <strong>Payment Confirmation:</strong><br>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: #f3f4f6; padding: 8px 12px; border-radius: 8px; margin-top: 5px;">
              <span class="material-symbols-outlined" style="font-size: 24px;">picture_as_pdf</span>
              <span style="font-size: 13px;">${uploadedFile.name}</span>
            </div>
          </div>
        `;
      }
    }
    
    const modalHtml = `
      <div style="text-align: left; max-height: 70vh; overflow-y: auto; padding-right: 10px;">
        <h3 style="margin-bottom: 10px; font-size: 1.25rem; font-weight: bold;">Billing Details</h3>
        <div style="background: #f9fafb; padding: 12px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Facility:</strong> ${formData.facilityName || "N/A"}</p>
          <p><strong>Address:</strong> ${formData.address}</p>
          <p><strong>City:</strong> ${formData.city}</p>
          <p><strong>Postal Code:</strong> ${formData.postalCode || "N/A"}</p>
        </div>
        
        <h3 style="margin-bottom: 10px; font-size: 1.25rem; font-weight: bold;">Order Items</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background: #f3f4f6;">
              <th style="padding: 8px; text-align: left; width: 50%;">Product</th>
              <th style="padding: 8px; text-align: center; width: 15%;">Qty</th>
              <th style="padding: 8px; text-align: right; width: 15%;">Unit Price</th>
              <th style="padding: 8px; text-align: right; width: 20%;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${orderItemsRows}
          </tbody>
        </table>
        
        <div style="display: flex; justify-content: space-between; gap: 20px; margin-bottom: 20px;">
          <div style="flex: 1; background: #f9fafb; padding: 12px; border-radius: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 8px;">Summary</h4>
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <span>Subtotal:</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <span>Shipping:</span>
              <span>${shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 8px; border-top: 1px solid #ddd; padding-top: 8px;">
              <span>Total:</span>
              <span>$${total.toFixed(2)}</span>
            </div>
          </div>
          <div style="flex: 1; background: #eef2ff; padding: 12px; border-radius: 8px;">
            <h4 style="font-weight: bold; margin-bottom: 8px;">Payment Breakdown</h4>
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <span>Due Today (50%):</span>
              <span style="color: #0a7e3a; font-weight: bold;">$${advancePayment.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Remaining upon dispatch:</span>
              <span>$${remainingPayment.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        ${paymentPreviewHtml}
      </div>
    `;
    
    const result = await Swal.fire({
      title: "Review Your Order",
      html: modalHtml,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm Order",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#0a7e3a",
      cancelButtonColor: "#d33",
      width: "850px",
      customClass: {
        popup: "rounded-xl",
        confirmButton: "font-bold py-2 px-4",
        cancelButton: "font-bold py-2 px-4"
      }
    });
    
    if (result.isConfirmed) {
      setReviewCompleted(true);
      await Swal.fire({
        title: "Order Confirmed!",
        text: "Your order has been placed successfully. You will receive a confirmation email shortly.",
        icon: "success",
        confirmButtonColor: "#0a7e3a"
      });
      // navigate("/order-success");
    }
  };
  
  // Cleanup preview URL on unmount
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);
  
  if (cartItems.length === 0) {
    return (
      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="bg-surface-container-lowest rounded-xl p-12">
          <p className="text-on-surface-variant text-lg mb-6">Your cart is empty.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-on-primary font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-all"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* Stepper */}
      <div className="mb-12 max-w-3xl mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -z-10 -translate-y-1/2"></div>
          
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              shippingCompleted ? "bg-secondary text-on-secondary" : "bg-surface-container-highest text-on-surface-variant"
            }`}>
              {shippingCompleted ? <span className="material-symbols-outlined text-sm">check</span> : "1"}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${shippingCompleted ? "text-secondary" : "text-on-surface-variant"}`}>Shipping</span>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              paymentCompleted ? "bg-secondary text-on-secondary" : shippingCompleted ? "bg-primary text-on-primary ring-4 ring-primary-fixed" : "bg-surface-container-highest text-on-surface-variant"
            }`}>
              {paymentCompleted ? <span className="material-symbols-outlined text-sm">check</span> : "2"}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${paymentCompleted ? "text-secondary" : shippingCompleted ? "text-primary" : "text-on-surface-variant"}`}>Payment</span>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              reviewCompleted ? "bg-secondary text-on-secondary" : (shippingCompleted && paymentCompleted) ? "bg-primary text-on-primary ring-4 ring-primary-fixed" : "bg-surface-container-highest text-on-surface-variant"
            }`}>
              {reviewCompleted ? <span className="material-symbols-outlined text-sm">check</span> : "3"}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${reviewCompleted ? "text-secondary" : (shippingCompleted && paymentCompleted) ? "text-primary" : "text-on-surface-variant"}`}>Review</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-12">
            {/* Billing Details Section (unchanged) */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-label-md uppercase tracking-widest text-on-surface-variant text-xs font-bold">Step 02</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-primary">Billing Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low p-8 rounded-xl">
                {/* ... same as earlier ... */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant">First Name <span className="text-error">*</span></label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3" placeholder="Enter first name" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant">Last Name <span className="text-error">*</span></label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3" placeholder="Enter last name" required />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant">Clinic or Facility Name (Optional)</label>
                  <input type="text" name="facilityName" value={formData.facilityName} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3" placeholder="Healthcare center name" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant">Address <span className="text-error">*</span></label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3" placeholder="House number and street name" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant">City <span className="text-error">*</span></label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3" placeholder="City" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant">Postal Code (Optional)</label>
                  <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3" placeholder="ZIP / Postal code" />
                </div>
              </div>
            </section>
            
            {/* Advance Payment Section (unchanged) */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-label-md uppercase tracking-widest text-tertiary text-xs font-bold">Mandatory</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Advance Payment</h2>
              </div>
              <div className="bg-tertiary-fixed rounded-xl p-8 border-l-8 border-tertiary shadow-lg shadow-tertiary/5">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-on-tertiary-fixed">50% Commitment Required</h3>
                    <p className="text-on-tertiary-fixed-variant leading-relaxed">
                      To finalize your clinical order, a <span className="font-bold">50% advance payment (${advancePayment.toFixed(2)})</span> is required. This ensures priority logistics for medical-grade equipment.
                    </p>
                    <div className="bg-white/40 p-4 rounded-lg space-y-2 text-sm text-on-tertiary-fixed">
                      <p className="font-bold">JazzCash Account Details:</p>
                      <p>Account: 0332-4825054</p>
                    </div>
                  </div>
                  <div className="w-full md:w-64">
                    {!uploadedFile ? (
                      <label className={`h-full border-2 border-dashed ${uploadError ? "border-error" : "border-tertiary/30"} rounded-xl flex flex-col items-center justify-center p-6 text-center bg-white/20 hover:bg-white/40 transition-all cursor-pointer group`}>
                        <input id="payment-upload" type="file" accept="image/png,image/jpeg,image/jpg,application/pdf" onChange={handleFileUpload} className="hidden" />
                        <span className="material-symbols-outlined text-4xl text-tertiary mb-3 group-hover:scale-110 transition-transform">cloud_upload</span>
                        <p className="text-xs font-bold text-on-tertiary-fixed-variant uppercase tracking-tighter">Upload Confirmation</p>
                        <p className="text-[10px] text-on-tertiary-fixed-variant/70 mt-1">PNG, JPG or PDF</p>
                        {uploadError && <p className="text-error text-xs mt-2">{uploadError}</p>}
                      </label>
                    ) : (
                      <div className="border-2 border-tertiary rounded-xl p-4 bg-white/20">
                        <div className="flex flex-col items-center gap-3">
                          {previewUrl ? (
                            <div className="relative w-full">
                              <img src={previewUrl} alt="Payment confirmation preview" className="w-full h-32 object-cover rounded-lg" />
                            </div>
                          ) : (
                            <div className="w-full h-32 bg-tertiary/10 rounded-lg flex items-center justify-center">
                              <span className="material-symbols-outlined text-4xl text-tertiary">picture_as_pdf</span>
                            </div>
                          )}
                          <div className="text-center">
                            <p className="text-xs font-medium text-on-tertiary-fixed-variant truncate max-w-[180px]">{uploadedFile.name}</p>
                            <p className="text-[10px] text-on-tertiary-fixed-variant/70 mt-1">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                          </div>
                          <button type="button" onClick={handleRemoveFile} className="text-error text-xs font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity">
                            <span className="material-symbols-outlined text-sm">delete</span> Remove
                          </button>
                        </div>
                      </div>
                    )}
                    <p className="text-xs text-center mt-2 text-on-tertiary-fixed-variant">{uploadedFile ? "Confirmation uploaded" : "Required"}</p>
                  </div>
                </div>
              </div>
            </section>
            
            <div className="flex justify-between items-center pt-6">
              <Link to="/cart" className="text-primary font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <span className="material-symbols-outlined">arrow_back</span> Back to Cart
              </Link>
              <button
                type="button"
                onClick={handleReviewOrder}
                disabled={!shippingCompleted || !paymentCompleted}
                className={`bg-primary text-on-primary px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all ${(!shippingCompleted || !paymentCompleted) ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Review Final Order
              </button>
            </div>
          </div>
          
          {/* Order Summary Sidebar (unchanged) */}
          <aside className="lg:col-span-5">
            <div className="sticky top-32 glass-panel p-8 rounded-xl shadow-xl shadow-slate-900/5 space-y-8 border border-white/50">
              <h3 className="text-2xl font-extrabold tracking-tight text-on-surface">Order Summary</h3>
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                      <img className="w-full h-full object-cover" alt={item.title} src={item.images?.[0] ? process.env.REACT_APP_BE_URL + item.images[0] : "https://via.placeholder.com/400x500?text=No+Image"} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-on-surface">{item.title}</h4>
                      {item.selectedOptions && <p className="text-sm text-on-surface-variant">{item.selectedOptions}</p>}
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">Qty: {item.quantity}</span>
                        <span className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-6 border-t border-on-surface/5">
                <div className="flex justify-between text-on-surface-variant"><span>Subtotal</span><span className="font-medium">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-on-surface-variant"><span>Shipping</span><span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
                <div className="flex justify-between text-xl font-extrabold text-on-surface pt-4 border-t border-on-surface/5"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg space-y-2 border border-primary/10">
                <div className="flex justify-between text-sm font-bold text-primary"><span>Due Today (50%)</span><span>${advancePayment.toFixed(2)}</span></div>
                <div className="flex justify-between text-xs text-on-surface-variant"><span>Due upon Dispatch</span><span>${remainingPayment.toFixed(2)}</span></div>
              </div>
            </div>
          </aside>
        </div>
      </form>
    </main>
  );
}