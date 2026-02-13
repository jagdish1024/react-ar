export default function MobileSheet({ activeTab }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-xl p-5 z-[5000]">
      <h2 className="text-lg font-black">{activeTab}</h2>
      <p className="text-gray-500 text-sm mt-2">
        Tap Enter AR to place the skeleton in your environment.
      </p>
    </div>
  );
}
