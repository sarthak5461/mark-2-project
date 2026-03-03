export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Mark Labs. All rights reserved.
      </div>
    </footer>
  );
}
