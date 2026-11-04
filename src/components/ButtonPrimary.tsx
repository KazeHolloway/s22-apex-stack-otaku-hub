"use client";
import SpecularButton from "@/components/SpecularButton";
export default function ButtonPrimary() {
  return (
    <SpecularButton
      size="lg"
      radius={18}
      tint="#18181b"
      tintOpacity={1}
      textColor="#fafafa"
      lineColor="#ffffff"
      baseColor="#3f3f46"
      intensity={1}
      idleIntensity={0.35}
      shineSize={10}
      shineFade={34}
      thickness={1.2}
      glow={1}
      followMouse
      proximity={250}
      onClick={() => console.log("clicked")}
    >
      Get Started
    </SpecularButton>
  );
}
