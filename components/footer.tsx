export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>Designed & Built by Ali Zokaei</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
