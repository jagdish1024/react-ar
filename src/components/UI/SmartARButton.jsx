import { useEffect, useState } from "react";
import { ARButton } from "@react-three/xr";

export default function SmartARButton() {
  const [supported, setSupported] = useState(null);

  useEffect(() => {
    if (!navigator.xr) {
      setSupported(false);
      return;
    }

    navigator.xr.isSessionSupported("immersive-ar").then(setSupported);
  }, []);

  // Loading
  if (supported === null) return null;

  // ✅ WebXR supported devices (POCO F5)
  if (supported) {
    return (
      <ARButton
        sessionInit={{ requiredFeatures: ["hit-test"] }}
      />
    );
  }

  // ❌ Unsupported devices (Nord CE4)
  return (
    <a
      href="intent://arvr.google.com/scene-viewer/1.0?file=https://react-ar-flame.vercel.app/skeleton_pre-cut.glb#Intent;scheme=https;package=com.google.android.googlequicksearchbox;end;"
      className="fixed top-4 right-4 z-[999999]
      bg-[#e5b36a] text-black px-5 py-3 rounded-xl font-black"
    >
      View in AR
    </a>
  );
}
