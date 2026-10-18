export default function Footer() {
  return (
    <footer className="mt-auto py-6 bg-primary/10 border-t border-primary/20">
      <div className="container mx-auto text-center font-medium text-primary">
        Daprel Portfolio © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
