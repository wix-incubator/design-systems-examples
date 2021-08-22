import * as React from 'react';
import { Cell, Page, Layout } from 'wix-style-react';
import { AddProductCard } from './AddProductCard';
import { breadcrumbs, useForm } from './AddProductUtils';

const AddProduct: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    name,
    description,
    price,
    imageLink,
    isSaveEnabled,
    setName,
    setDescription,
    setPrice,
    setImageLink,
    onSave,
    onCancel,
  } = useForm();
  return (
    <Page>
      <Page.Header
        title="Untitled Product"
        dataHook="add-product-page-header"
        breadcrumbs={breadcrumbs()}
      />
      <Page.Content>
        <Layout>
            <Cell span={12}>
              <AddProductCard
                name={name}
                description={description}
                price={0}
                imageLink={imageLink}
                onNameChanges={setName}
                ondescriptionChanges={setDescription}
                onPriceChanges={setPrice}
                onImageLinkChanges={setImageLink}
                onSave={onSave}
                onCancel={onCancel}
                isSaveEnabled={isSaveEnabled}
              />
            </Cell>
        </Layout>
      </Page.Content>
    </Page>
  );
};

export default AddProduct;
