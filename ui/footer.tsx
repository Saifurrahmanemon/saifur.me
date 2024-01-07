export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="hidden px-2 app-max-w sm:block">
      <div className="flex items-center justify-center w-full h-[0.5px] mx-auto  bg-gray-200 dark:bg-gray-700"></div>
      <div className="flex items-center justify-between py-2">
        <em className="text-xs text-secondary">© Saifur Rahman Emon</em>
        <em className="text-xs text-secondary">{currentYear} </em>
      </div>
    </footer>
  );
}
