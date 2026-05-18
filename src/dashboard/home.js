import { useState, useEffect } from 'react';
import { 
  useGetTotalOrders, 
  useGetCompletedOrders, 
  useGetPendingOrders,
  useGetTotalBusiness,
  useGetTotalQueries,
  useGetTotalBulkOrders,
  useGetTotalCategories,
  useGetTotalProducts
} from '../backend/hooks'; 

export default function DashboardHome() {
  // Fetch each metric individually (or you could combine into one API call)
  const { data: totalOrders, isLoading: loadingOrders } = useGetTotalOrders();
  const { data: completedOrders, isLoading: loadingCompleted } = useGetCompletedOrders();
  const { data: pendingOrders, isLoading: loadingPending } = useGetPendingOrders();
  const { data: totalBusiness, isLoading: loadingBusiness } = useGetTotalBusiness();
  const { data: totalQueries, isLoading: loadingQueries } = useGetTotalQueries();
  const { data: totalBulkOrders, isLoading: loadingBulk } = useGetTotalBulkOrders();
  const { data: totalCategories, isLoading: loadingCategories } = useGetTotalCategories();
  const { data: totalProducts, isLoading: loadingProducts } = useGetTotalProducts();

  // Optionally, combine loading state
  const isLoading = loadingOrders || loadingCompleted || loadingPending || loadingBusiness || loadingQueries || loadingBulk || loadingCategories || loadingProducts;

  // Format currency for total business
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">
            Administrative Overview
          </span>
          <h1 className="text-3xl font-headline font-extrabold text-on-surface mt-1">
            Good Morning, Kinetix Admin
          </h1>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Orders */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-primary/5 rounded-lg text-primary">
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-sm font-medium mt-4">Total Orders</h3>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {totalOrders?.count || 0}
            </p>
          </div>

          {/* Completed Orders */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-secondary shadow-sm group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-secondary/5 rounded-lg text-secondary">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-sm font-medium mt-4">Completed Orders</h3>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {completedOrders?.count || 0}
            </p>
          </div>

          {/* Pending Orders */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-tertiary shadow-sm group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-tertiary/5 rounded-lg text-tertiary">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-sm font-medium mt-4">Pending Orders</h3>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {pendingOrders?.count || 0}
            </p>
          </div>

          {/* Total Business (Revenue) */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-primary/5 rounded-lg text-primary">
                <span className="material-symbols-outlined">attach_money</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-sm font-medium mt-4">Total Business</h3>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {formatCurrency(totalBusiness?.amount || 0)}
            </p>
          </div>

          {/* Total Queries */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-secondary shadow-sm group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-secondary/5 rounded-lg text-secondary">
                <span className="material-symbols-outlined">contact_support</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-sm font-medium mt-4">Total Queries</h3>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {totalQueries?.count || 0}
            </p>
          </div>

          {/* Total Bulk Orders */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-tertiary shadow-sm group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-tertiary/5 rounded-lg text-tertiary">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-sm font-medium mt-4">Total Bulk Orders</h3>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {totalBulkOrders?.count || 0}
            </p>
          </div>

          {/* Total Categories Listed */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-primary/5 rounded-lg text-primary">
                <span className="material-symbols-outlined">category</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-sm font-medium mt-4">Total Categories Listed</h3>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {totalCategories?.count || 0}
            </p>
          </div>

          {/* Total Products */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-secondary shadow-sm group hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-secondary/5 rounded-lg text-secondary">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-sm font-medium mt-4">Total Products</h3>
            <p className="text-2xl font-headline font-bold text-on-surface">
              {totalProducts?.count || 0}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}