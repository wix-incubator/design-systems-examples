import React from 'react';
import { Cell, Breadcrumbs } from 'wix-style-react';

export const breadcrumbs = () => {
    return (
        <Cell>
            <Breadcrumbs
                items={[
                    { id: 1, value: 'Products', link: 'productslist' },
                    { id: 2, value: 'Untitled Product' },
                ]}
            />
        </Cell>
    );
};

export function useForm() {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState<unknown>(null);
    const [imageLink, setImageLink] = React.useState('');
    const isSaveEnabled = !!(name && imageLink && (price === 0 || price) && imageLink);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async function onSave() {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function onCancel() {}

    return {
        name,
        description,
        price,
        imageLink,
        setName,
        setDescription,
        setPrice,
        setImageLink,
        onSave,
        onCancel,
        isSaveEnabled,
    };
}
