export default function NoiseBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 bg-[#09090B]" />

      {/* Glow central */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-[1200px]
        h-[900px]

        rounded-full
        bg-white/[0.03]
        blur-[220px]
        "
      />

      {/* Viñeta */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.55)_100%)]
        "
      />

      {/* Noise */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.035]
        mix-blend-soft-light
        bg-[url('/noise.png')]
        bg-repeat
        "
      />

    </div>
  );
}