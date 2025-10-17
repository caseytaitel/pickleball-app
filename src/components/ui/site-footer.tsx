export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Pickleball App
      </div>
    </footer>
  );
}

export { SiteFooter };