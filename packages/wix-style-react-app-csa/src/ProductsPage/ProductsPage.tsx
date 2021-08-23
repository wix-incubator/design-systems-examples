import React, { useContext } from 'react';
import {
    CardGalleryItem,
    PopoverMenu,
    IconButton,
    Layout,
    Cell,
    AddItem,
    Page,
    Proportion,
    EmptyState,
    Box,
} from 'wix-style-react';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import More from 'wix-ui-icons-common/More';
import Delete from 'wix-ui-icons-common/Delete';
import {useHistory} from 'react-router-dom';
import {Context, Product} from '../Context/context';

const ProductsPage: React.FC = () => {
    const history = useHistory();
    const { products, addProduct, removeProduct } = useContext(Context);

    const renderCardGalleryItem = (
        product: Product,
        index: number
    ) => {
        const {title, subtitle, imageSrc, badge} = product;

        return <CardGalleryItem
            title={title}
            subtitle={subtitle}
            badge={badge}
            primaryActionProps={{
                label: 'Button',
            }}
            secondaryActionProps={{
                label: 'Text link',
            }}
            backgroundImageUrl={imageSrc}
            settingsMenu={
                <PopoverMenu
                    triggerElement={({ toggle, close }) => (
                        <IconButton
                            onClick={toggle}
                            onMouseLeave={close}
                            skin="light"
                            size="small"
                            priority="secondary"
                        >
                            <More/>
                        </IconButton>
                    )}
                >
                    <PopoverMenu.MenuItem
                        text="Dublicate"
                        prefixIcon={<Duplicate />}
                        onClick={() => addProduct(product)}
                    />
                    <PopoverMenu.MenuItem
                        text="Delete"
                        skin="destructive"
                        prefixIcon={<Delete />}
                        onClick={() => removeProduct(index)}
                    />
                </PopoverMenu>
            }
        />
    };


    const renderProductsGallery = (products: Product[]) => {
        return <>
            {products.map((product, index) => (
                <Cell key={index} span={4}>
                    {renderCardGalleryItem(product, index)}
                </Cell>
            ))}
            <Cell span={4}>
                <Proportion>
                    <AddItem
                        onClick={() => {
                            history.push('/add-product');
                        }}
                        size="large"
                    >
                        Add Item
                    </AddItem>
                </Proportion>
            </Cell>
        </>
    }

    return (
        <Page height="100vh">
            <Page.Header title="Page Title"/>
            <Page.Content>
                <Layout>
                    {products?.length > 0 ?
                        renderProductsGallery(products) :
                        <Cell>
                            <EmptyState
                                theme='page'
                                image={<Box height={120} width={120} borderRadius='50%' backgroundColor='D50'/>}
                                title="You don't have any items yet"
                                subtitle="Create your product item in an easy & fast way to display it on your site"
                            />
                        </Cell>
                    }
                </Layout>
            </Page.Content>
        </Page>
    );
};

export default ProductsPage;
