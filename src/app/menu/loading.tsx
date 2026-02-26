
export default function Loading() {
    return (
      <div className="w-full min-h-100 flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-brand-dark font-bold">Loading...</p>
        </div>
      </div>
    );
}
