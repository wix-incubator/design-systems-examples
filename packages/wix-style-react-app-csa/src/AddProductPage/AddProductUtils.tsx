import React from 'react';

export function useForm() {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState<string | undefined | number>(undefined);
    const [imageLink, setImageLink] = React.useState('');
    const isSaveEnabled = !!(name && imageLink && (price === 0 || price) && imageLink);
    
    const setPriceByInput = (value: number | null) => setPrice(value === null ? undefined : value);

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
        setPrice: setPriceByInput,
        setImageLink,
        onSave,
        onCancel,
        isSaveEnabled,
    };
}
