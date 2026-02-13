export default function InfoPanel({ activeTab }) {
  return (
    <article className="w-[520px] bg-white h-full border-l overflow-y-auto p-10">
      <h1 className="text-4xl font-black mb-6">{activeTab}</h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        This module provides detailed anatomical information and interactive 3D
        exploration.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Key Structures</h2>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Anterior longitudinal ligament</li>
        <li>Posterior longitudinal ligament</li>
        <li>Yellow ligaments</li>
        <li>Interspinous ligaments</li>
      </ul>

      <p className="text-gray-500 mt-10 text-sm">
        Tap Enter AR to explore this module in augmented reality.
      </p>
    </article>
  );
}
