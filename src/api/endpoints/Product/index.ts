export const ProductApi = {
  getProducts: "/get-products",
  getProductById: (id: string) => `/get-product-details/${id}`,
  getProductsByCategory: (id: number) => `/get-products-by-category/${id}`,
  getProductsBySearch: (query: string) => `/get-products-by-search/${query}`,
  getProductsByFilter: (query: string) => `/get-products-by-filter/${query}`,
  getProductsByPrice: (min: number, max: number) =>
    `/get-products-by-price/${min}/${max}`,
  getProductsByRating: (rating: number) => `/get-products-by-rating/${rating}`,
  getProductsByDiscount: (discount: number) =>
    `/get-products-by-discount/${discount}`,
  getProductsByColor: (color: string) => `/get-products-by-color/${color}`,
  getProductsBySize: (size: string) => `/get-products-by-size/${size}`,
  getProductsByBrand: (brand: string) => `/get-products-by-brand/${brand}`,
  getProductsByTag: (tag: string) => `/get-products-by-tag/${tag}`,
  getProductsByType: (type: string) => `/get-products-by-type/${type}`,
  getProductsByMaterial: (material: string) =>
    `/get-products-by-material/${material}`,
  getProductsByPattern: (pattern: string) =>
    `/get-products-by-pattern/${pattern}`,
  getProductsByStyle: (style: string) => `/get-products-by-style/${style}`,
  getProductsByTheme: (theme: string) => `/get-products-by-theme/${theme}`,
  getProductsByOccasion: (occasion: string) =>
    `/get-products-by-occasion/${occasion}`,
  getProductsBySeason: (season: string) => `/get-products-by-season/${season}`,
};
