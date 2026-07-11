export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[#0db57b] to-[#0a8f61] shadow-sm">
        <span className="text-white font-bold text-lg leading-none">S</span>
      </div>
      <span className="text-xl font-bold tracking-tight">
        Serve<span className="text-[#0db57b]">Imo</span>
      </span>
    </div>
  );
}
