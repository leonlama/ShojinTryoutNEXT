export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 text-center p-4 border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Shojin Chess. All Rights Reserved.
      </p>
    </footer>
  );
}
