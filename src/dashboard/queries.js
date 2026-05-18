import { useGetAllQueries } from '../backend/hooks';

export default function Queries() {
  const { data: queries, isLoading, error } = useGetAllQueries();

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
      <div className="p-6 lg:p-10">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 lg:p-10">
        <div className="bg-error/10 text-error p-4 rounded-xl text-center">
          Failed to load contact queries. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className=" lg:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
            Contact Queries
          </h2>
          <p className="text-on-surface-variant mt-2 max-w-xl">
            Manage therapist inquiries, patient feedback, and equipment support requests from one central hub.
          </p>
        </div>
      </div>

      {/* Table – no Status or Actions */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/15 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50 border-b border-outline-variant/10">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                  Sender Name
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                  Subject (Interested In)
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                  Message Preview
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant text-center">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {queries && queries.length > 0 ? (
                queries.map((query) => (
                  <tr key={query.id} className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-sm">
                          {query.name?.charAt(0) || "?"}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-on-surface">{query.name}</p>
                          <p className="text-xs text-on-surface-variant">{query.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-bold text-sm text-on-surface">
                        {query.interested_in || "General Inquiry"}
                      </p>
                    </td>
                    <td className="px-6 py-5 max-w-sm">
                      <p className="text-sm text-on-surface-variant truncate" title={query.message}>
                        {query.message?.substring(0, 80) || "—"}
                        {query.message?.length > 80 ? "…" : ""}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-center whitespace-nowrap">
                      <p className="text-sm font-medium text-on-surface">{formatDate(query.created_at)}</p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-on-surface-variant">
                    No contact queries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}