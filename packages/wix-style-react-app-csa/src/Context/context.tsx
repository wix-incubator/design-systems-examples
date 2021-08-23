import React from 'react';
import { Badge } from 'wix-style-react';

export interface Product {
    imageSrc: string;
    title: string;
    subtitle: string;
    badge: JSX.Element;
}

interface StoreContext {
    products: Product[];
}

export const contextValue: StoreContext = {
    products: [
        {
            imageSrc:
                'https://litb-cgis.rightinthebox.com/images/x/202105/bps/product/inc/qruive1621230222516.jpg',
            title: 'Blue Dress',
            subtitle: '$15.99',
            badge: <Badge skin="standard"> Popular</Badge>,
        },
        {
            imageSrc:
                'https://litb-cgis.rightinthebox.com/images/640x640/202001/bgldfg1578901323092.jpg',
            title: 'Yellow Dress',
            subtitle: '$7.89',
            badge: <Badge skin="standard">New</Badge>,
        },
    ],
}

export const Context = React.createContext<StoreContext>(contextValue);

