// Обрабатываем вхождение продуктов с одинаковым id

export function filterUniqueById(products) {
  const uniqueProducts = new Map()

  for (const product of products) {
    if (!uniqueProducts.has(product.id)) {
      uniqueProducts.set(product.id, product)
    }
  }

  return Array.from(uniqueProducts.values())
}
