export default function Header() {
    return (
        <>
            <header className="app-header">
                <div className="logo-area">
                    <span className="brand-viva">Viva</span><span className="brand-fresh">Fresh</span>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Kërko produkte ose oferta..."/>
                </div>
            </header>
        </>
    );
}