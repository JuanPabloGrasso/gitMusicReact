import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowProyect({ totalProducts, totalUsers, totalCategories }) {
    const data = [
        {
            title: 'Total de productos',
            color: 'success',
            total: totalProducts,
            icon: 'fa-clipboard-list'
        },
        {
            title: ' Total de categorías',
            color: 'danger',
            total: totalCategories,
            icon: 'fa-award'
        },
        {
            title: 'Total de usuarios',
            color: 'secondary',
            total: totalUsers,
            icon: 'fa-user-check'
        }]

    return (
        <div className='row'>
            {
                data.map(element =>
                    <SmallCard
                        title={element.title}
                        color={element.color}
                        icon={element.icon}
                        total={element.total}
                    />
                )
            }
        </div>
    )
}

export default ContentRowProyect;