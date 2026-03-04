export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Mini Hemnet. Built by Bobby.
      </div>
    </footer>
  );
}
