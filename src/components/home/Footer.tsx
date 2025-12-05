export default function Footer() {
  return (
    <footer className="bg-[#2F3E30] px-6 py-12 text-[#F9F9F7]/60 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-6 text-sm md:grid-cols-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#F9F9F7]/40">
            Endereço
          </p>
          <p className="mt-2">
            Rua Cel. Relíquias Guimarães, 72
            <br />
            Santa Adélia · São Paulo
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#F9F9F7]/40">
            Direitos
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Crer &amp; Ser.</p>
        </div>
        <div className="md:text-right">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#F9F9F7]/40">
            Registro
          </p>
          <p className="mt-2">CRP 06/144503</p>
        </div>
      </div>
    </footer>
  );
}

