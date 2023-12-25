export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-2 app-max-w ">
      <div className="flex items-center justify-center w-2/4 h-[0.5px]  bg-gray-200"></div>
      <div className="flex items-center justify-between py-2">
        <em className="text-xs text-secondary">© Saifur Rahman Emon</em>
        <p className="text-xs text-secondary">{currentYear} </p>
      </div>
    </footer>
  );
}
