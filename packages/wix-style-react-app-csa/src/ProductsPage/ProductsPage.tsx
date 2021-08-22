import React from 'react';
import {
    CardGalleryItem,
    PopoverMenu,
    IconButton,
    Layout,
    Cell,
    Badge,
    AddItem,
    Page,
    Breadcrumbs,
    Proportion,
} from 'wix-style-react';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import MoveTo from 'wix-ui-icons-common/MoveTo';
import More from 'wix-ui-icons-common/More';
import Delete from 'wix-ui-icons-common/Delete';
import Hidden from 'wix-ui-icons-common/Hidden';

const ProductsPage = () => {

    const renderCardGalleryItem = ({ imageSrc, title, subtitle, badge }) => (
        <CardGalleryItem
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
                            <More />
                        </IconButton>
                    )}
                >
                    <PopoverMenu.MenuItem
                        text="Dublicate"
                        prefixIcon={<Duplicate />}
                    />
                    <PopoverMenu.MenuItem
                        text="Move to"
                        prefixIcon={<MoveTo />}
                    />
                    <PopoverMenu.MenuItem text="Hide" prefixIcon={<Hidden />} />
                    <PopoverMenu.MenuItem
                        text="Archive"
                        skin="destructive"
                        prefixIcon={<Delete />}
                    />
                </PopoverMenu>
            }
        />
    );

    const products = [
        {
            imageSrc: 'https://litb-cgis.rightinthebox.com/images/x/202105/bps/product/inc/qruive1621230222516.jpg',
            title:  'Blue Dress',
            subtitle: '$15.99',
            badge:  <Badge skin="standard"> Popular</Badge>
        },
        {
            imageSrc: 'https://litb-cgis.rightinthebox.com/images/640x640/202001/bgldfg1578901323092.jpg',
            title: 'Yellow Dress',
            subtitle: '$7.89',
            badge: <Badge skin="standard">New</Badge>,}
    ];

    return (
        <Page height="100vh">
            <Page.Header
                title="Page Title"
                breadcrumbs={
                    <Breadcrumbs
                        items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
                        activeId="3"
                        size="medium"
                        onClick={() =>{}}
                    />
                }
            />
            <Page.Content>
                <Layout>
                    {products.map((product, index) => (
                        <Cell key={index} span={4}>
                            {renderCardGalleryItem(product)}
                        </Cell>))
                    }
                    <Cell span={4}>
                        <Proportion>
                            <AddItem>Add Item</AddItem>
                        </Proportion>
                    </Cell>
                </Layout>
            </Page.Content>
        </Page>
    );
};




export default ProductsPage;