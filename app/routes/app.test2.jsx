import { TextField, Icon, Thumbnail, Text, Button } from "@shopify/polaris";
import { useState } from "react";

export default function ReviewsSection() {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchChange = (value) => {
        setSearchValue(value);
    };
    const reviewsData = [
        {
            id: '1',
            author: 'Steven Moreno',
            date: '2025-01-07 00:56:00',
            content: 'I choose 2xL and it suits me very well adjusted and loose as I wanted, I measure 173 and weight 70 between 75kg',
            productName: '2XM Optical Doubler',
            productImage: '/images/2XM_Optical_Doubler.jpg',
            likes: 0,
        },
        {
            id: '2',
            author: 'Kimberly Osborne',
            date: '2025-01-07 00:56:00',
            content: 'I choose 2xL and it suits me very well adjusted and loose as I wanted, I measure 173 and weight 70 between 75kg',
            productName: 'Binocular - 8.1.2 - 8x42',
            productImage: '/images/binocular.jpg',
            likes: 0,
        },
        {
            id: '3',
            author: 'John Gonzales',
            date: '2025-01-01 15:05:00',
            content: 'EXACTLY what i was looking for.',
            productName: '2XM Optical Doubler',
            productImage: '/images/2XM_Optical_Doubler.jpg',
            likes: 0,
        },
    ];
    const filteredProducts = reviewsData.filter((data) =>
        data.productName.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.content.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log('filteredProducts->', filteredProducts)

    return (
        <>
            <div style={{ flex: 1, marginRight: '16px' }}>
                <TextField
                    label="Search"
                    labelHidden
                    placeholder="Search by review content,name,email or product"
                    value={searchValue}
                    onChange={handleSearchChange}
                    prefix={
                        <div style={{ padding: '0 8px' }}>
                            <Icon source={() => <span>🔍</span>} />
                        </div>
                    }
                />
            </div>
            {
                filteredProducts.map((item) => (
                    <div>
                        <h2>{item.author}</h2>
                        <h2>{item.content}</h2>
                    </div>
                ))
            }
        </>
    );
}