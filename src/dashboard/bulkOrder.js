import { useGetBulkOrders } from '../backend/hooks';

export default function BulkOrders() {
  const { data: bulkOrders, isLoading, error } = useGetBulkOrders();

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <main className="min-h-screen p-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen p-8">
        <div className="bg-error/10 text-error p-4 rounded-xl text-center">
          Failed to load bulk orders. Please try again later.
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="pb-12">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Supply Chain & Operations
          </span>
          <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mt-1">
            Bulk Order Requests
          </h1>
          <p className="text-on-surface-variant mt-2 max-w-2xl text-sm leading-relaxed">
            Review and manage institutional procurement requests for sensory equipment and clinical
            physiotherapy supplies.
          </p>
        </div>

        {/* Table – full details, no truncation */}
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_48px_rgba(0,67,138,0.05)] border border-outline-variant/10">
          <div className="px-8 py-6 bg-surface-bright">
            <h3 className="text-lg font-bold text-sky-900">Recent Requests</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="bg-surface-container-low border-b border-outline-variant/10">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">
                    ID
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">
                    Institution
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">
                    Contact Person
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">
                    Work Email
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">
                    Expected Qty
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">
                    Interests
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">
                    Project Details
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">
                    Date Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {bulkOrders && bulkOrders.length > 0 ? (
                  bulkOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-6 py-5 text-sm font-semibold text-primary whitespace-nowrap">
                        #{order.id}
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-on-surface">
                        {order.institution_name}
                      </td>
                      <td className="px-6 py-5 text-sm text-on-surface-variant whitespace-nowrap">
                        {order.contact_person}
                      </td>
                      <td className="px-6 py-5 text-sm text-on-surface-variant">
                        {order.work_email}
                      </td>
                      <td className="px-6 py-5 text-sm text-on-surface-variant whitespace-nowrap">
                        {order.expected_quantity || "N/A"}
                      </td>
                      <td className="px-6 py-5 text-sm text-on-surface-variant max-w-[200px]">
                        {order.specific_product_interests || "—"}
                      </td>
                      {/* Project details – full text, no truncation */}
                      <td className="px-6 py-5 text-sm text-on-surface-variant">
                        {order.project_details || "—"}
                      </td>
                      <td className="px-6 py-5 text-sm text-on-surface-variant whitespace-nowrap">
                        {formatDate(order.created_at)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="px-8 py-12 text-center text-on-surface-variant">
                      No bulk order requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}