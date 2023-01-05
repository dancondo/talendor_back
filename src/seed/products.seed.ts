import { Product } from "../products/products.entity"

export const productsSeeds = async (manager) => {
  const products: Partial<Product>[] = [
    {
      price: 150,
      name: 'product1',
      description: 'description',
      image: 'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    },
    {
      price: 150,
      name: 'product2',
      description: 'description',
      image: 'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    },
    {
      price: 150,
      name: 'product3',
      description: 'description',
      image: 'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    },
    {
      price: 150,
      name: 'product4',
      description: 'description',
      image: 'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    },
    {
      price: 150,
      name: 'product5',
      description: 'description',
      image: 'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    },
    {
      price: 150,
      name: 'product6',
      description: 'description',
      image: 'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    }
  ]

  const productsPromises = products.map(p => {
    const product = new Product()
    product.name = p.name
    product.description = p.description
    product.image = p.image
    product.price = p.price
    manager.save(product)
  })

  return Promise.all(productsPromises)
}