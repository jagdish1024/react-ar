export default function ARHUD({ onRotate, onReset }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] flex gap-4">
      <button
        onClick={onRotate}
        className="bg-white px-6 py-3 rounded-full font-bold shadow-lg"
      >
        Rotate ↻
      </button>

      <button
        onClick={onReset}
        className="bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg"
      >
        Reset ✕
      </button>
    </div>
  );
}
