type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center bg-white rounded-full shadow-md border px-2 py-1 w-full">
      <div className="flex-1 flex items-center gap-2 px-2">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm5.707-4.293l3.586 3.586-1.414 1.414-3.586-3.586A8.001 8.001 0 0112 20a8 8 0 118-8c0 1.657-.504 3.2-1.293 4.507z" fill="#B0B0B0"/></svg>
        <input
          type="text"
          placeholder="Destino: Buscar destinos"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="outline-none border-none bg-transparent w-full text-sm"
        />
      </div>
      <div className="hidden md:flex items-center gap-2 px-2 border-l border-gray-200">
        <span className="text-xs text-gray-500">Fechas</span>
        <span className="text-xs text-gray-400">Introduce las fechas</span>
      </div>
      <div className="hidden md:flex items-center gap-2 px-2 border-l border-gray-200">
        <span className="text-xs text-gray-500">Viajeros</span>
        <span className="text-xs text-gray-400">Añade viajeros</span>
      </div>
      <button className="ml-2 bg-[#FF385C] hover:bg-[#e11d48] text-white rounded-full p-2 flex items-center justify-center">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FF385C"/><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#fff"/></svg>
      </button>
    </div>
  );
};

export default SearchBar;
