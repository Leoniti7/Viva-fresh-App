import productsData from "../products";
export default function Main() {
    return (
        <>
            <main className="app-container">

                <section className="promo-banner">
                    <div className="banner-content">
                        <h2>Zbritjet e Javës!</h2>
                        <p>Eja dhe shfrytëzo ofertat më të mira në qytet.</p>
                        <button className="btn-banner">Shiko Fletushkën</button>
                    </div>
                </section>

                <section className="section-categories">
                    <h3>Kategoritë</h3>
                    <div className="categories-grid">
                        <div className="category-card">🥦 Pemë & Perime</div>
                        <div className="category-card">🥛 Produkte Qumështi</div>
                        <div className="category-card">🥩 Mish freskët</div>
                        <div className="category-card">🧼 Higjienë</div>
                    </div>
                </section>

                <section className="section-products">
                    <h3>Produkte në Ofertë</h3>
                    <div className="products-grid">

                        {productsData.map((product) => (
                            <div className="product-card" key={product.id}>
                                {product.badge && <div className="product-badge">{product.badge}</div>}

                                <div className="product-image-container">
                                    <img src={product.image} alt={product.title} className="product-img" />
                                </div>

                                <h4 className="product-title">{product.title}</h4>

                                <div className="product-price">
                                    <span className="old-price">{product.oldPrice}</span>
                                    <span className="current-price">{product.currentPrice}</span>
                                </div>

                                <div className="product-actions">
                                    <button className="btn-action btn-edit">✏️ Edit</button>
                                    <button className="btn-action btn-delete">🗑️ Delete</button>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </main>
        </>
    );
}