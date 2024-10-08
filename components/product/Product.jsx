'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const fetchProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts()
            setProducts(fetchedProducts)
            setLoading(false)
        }

        loadProducts()
    }, [])

    if (loading) return <h2 className="text-center text-2xl font-bold text-teal-600">Loading...</h2>

    return (
        <div className="container mx-auto px-4 py-12 bg-gray-100">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-teal-700">Discover Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {products.map(product => (
                    <div key={product.id} className="bg-white border border-teal-500 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <Image src={product.image} alt={product.title} width={200} height={300} className="w-full h-64 object-cover rounded-t-2xl" />
                        <div className="p-6 bg-teal-50 rounded-b-2xl">
                            <h3 className="text-lg font-bold mb-3 text-teal-800">{product.title}</h3>
                            <p className="text-teal-900 text-2xl font-extrabold mb-3">${product.price.toFixed(2)}</p>
                            <p className="text-teal-700 mb-3">{product.description.slice(0, 80)}...</p>
                            <p className="text-sm text-teal-600">Category: {product.category}</p>
                            <p className="text-sm text-teal-600 mb-4">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                            <button className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white py-3 px-5 rounded-lg hover:from-green-500 hover:to-teal-500 transition-all">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
