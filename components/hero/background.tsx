export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="absolute right-20 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

    </div>
  );
}