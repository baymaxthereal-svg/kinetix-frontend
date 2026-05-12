import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate totals (no tax)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? (subtotal >= 300 ? 0 : 12) : 0;
  const total = subtotal + shipping;

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (cartItems.length === 0) {
    return (
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase font-label">
            Your Selection
          </span>
          <h1 className="text-5xl font-extrabold text-primary font-headline tracking-tight mt-2">
            Shopping Cart
          </h1>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-12">
          <p className="text-on-surface-variant text-lg mb-6">
            Your cart is empty.
          </p>
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
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <span className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase font-label">
          Your Selection
        </span>
        <h1 className="text-5xl font-extrabold text-primary font-headline tracking-tight mt-2">
          Shopping Cart
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Table headers */}
          <div className="grid grid-cols-12 px-6 py-4 bg-surface-container-low rounded-xl text-xs font-bold text-on-surface-variant uppercase tracking-widest font-label hidden md:grid">
            <div className="col-span-6">Product Detail</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 flex items-center gap-6">
                  <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      alt={item.title}
                      src={
                        item.images && item.images[0]
                          ? process.env.REACT_APP_BE_URL + item.images[0]
                          : "https://via.placeholder.com/400x500?text=No+Image"
                      }
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-on-surface font-headline">
                      {item.title}
                    </h3>
                    {item.selectedOptions && (
                      <p className="text-sm text-on-surface-variant mt-1 font-body">
                        {item.selectedOptions}
                      </p>
                    )}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-error text-xs font-semibold mt-3 flex items-center gap-1 hover:opacity-70 transition-opacity"
                    >
                      <span className="material-symbols-outlined text-sm">
                        delete
                      </span>
                      Remove Item
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <div className="flex items-center bg-surface-container-high rounded-full px-3 py-1">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">
                        remove
                      </span>
                    </button>
                    <span className="px-4 font-bold text-on-surface">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="text-on-surface-variant font-body">
                    ${Number(item.price).toFixed(2)}
                  </span>
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="text-lg font-bold text-primary font-headline">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-8 flex justify-between items-center">
            <Link
              to="/shop"
              className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary - No Tax */}
        <div className="lg:col-span-4 sticky top-32">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-xl shadow-primary/5 border border-outline-variant/15">
            <h2 className="text-2xl font-bold text-on-surface font-headline mb-8">
              Order Summary
            </h2>
            <div className="space-y-4 font-body">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Subtotal</span>
                <span className="font-semibold text-on-surface">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-on-surface">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="h-px bg-surface-container-high my-6"></div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-label">
                    Total Amount
                  </p>
                  <p className="text-3xl font-extrabold text-primary font-headline mt-1">
                    ${total.toFixed(2)}
                  </p>
                </div>
                {shipping === 0 && (
                  <div className="text-right">
                    <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">
                      Free Shipping
                    </span>
                  </div>
                )}
              </div>
            </div>
            <Link
              to="/checkout"
              className="w-full mt-8 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Proceed to Checkout
              <span className="material-symbols-outlined">lock</span>
            </Link>
            <div className="mt-8 space-y-4">
              <p className="text-xs text-on-surface-variant text-center leading-relaxed">
                Complimentary shipping on orders over $300. <br />
                Secure clinical-grade payment processing.
              </p>
              <div className="flex justify-center gap-4 opacity-40 grayscale">
                <span className="material-symbols-outlined">credit_card</span>
                <span className="material-symbols-outlined">
                  account_balance
                </span>
                <span className="material-symbols-outlined">contactless</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}