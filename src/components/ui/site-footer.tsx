export default function SiteFooter() {
  return (
    <footer className="bg-charcoal border-t border-gradient-to-r from-gold to-sea">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold via-sky to-sea"></div>
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted">
          © 2025 pkkle
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };