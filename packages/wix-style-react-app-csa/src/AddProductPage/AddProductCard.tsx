import {
    Container,
    Row,
    Col,
    Card,
    FormField,
    Input,
    InputArea,
    NumberInput,
    Box,
    Button,
} from 'wix-style-react';
import * as Icons from 'wix-ui-icons-common';
import { Layout, Cell } from 'wix-style-react';
import React from 'react';

export interface IAddProductCardProp {
    name: string;
    description: string;
    price: number | undefined | string;
    imageLink: string;
    onNameChanges(name: string): void;
    ondescriptionChanges(desc: string): void;
    onPriceChanges(price: number | null): void;
    onImageLinkChanges(link: string): void;
    onCancel(): void;
    onSave(): void;
    isSaveEnabled: boolean;
}

export const AddProductCard: React.FC<IAddProductCardProp> = (props) => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {
        name,
        description,
        price,
        imageLink,
        onNameChanges,
        ondescriptionChanges,
        onPriceChanges,
        onImageLinkChanges,
        onCancel,
        onSave,
        isSaveEnabled,
    } = props;

    return (
        <Card>
            <Card.Header title="Add new item" dataHook="add-product-card-header" />
            <Card.Divider />
            <Card.Content>
                <Box>
                    <Layout>
                        <Cell span={3}>
                            <FormField label="Name">
                                <Input
                                    dataHook="input-product-name"
                                    placeholder="Enter a name"
                                    value={name}
                                    onChange={(e) => onNameChanges(e.target.value)}
                                />
                            </FormField>
                        </Cell>
                        <Cell span={3}>
                            <FormField label="Price">
                                <Box width="126px">
                                    <NumberInput
                                        dataHook="input-product-price"
                                        value={price}
                                        placeholder="Value"
                                        onChange={(e) => onPriceChanges(e)}
                                        prefix={<Input.Affix>$</Input.Affix>}
                                    />
                                </Box>
                            </FormField>
                        </Cell>
                        <Cell span={6}></Cell>
                        <Cell span={3}>
                            <FormField label="Description">
                                <InputArea
                                    dataHook="input-aread-product-description"
                                    value={description}
                                    onChange={(e) => ondescriptionChanges(e.target.value)}
                                    placeholder="value"
                                    minHeight="112px"
                                    maxHeight="112px"
                                />
                            </FormField>
                        </Cell>
                        <Cell span={3}>
                            <FormField label="Image">
                                <Input
                                    dataHook="input-img-url"
                                    value={imageLink}
                                    onChange={(e) => onImageLinkChanges(e.target.value)}
                                    placeholder="Image Link"
                                    prefix={
                                        <Input.IconAffix>
                                            <Icons.Link />
                                        </Input.IconAffix>
                                    }
                                />
                            </FormField>
                        </Cell>
                        <Cell><Box height="350px"/></Cell>
                    </Layout>
                </Box>
            </Card.Content>
            <Card.Divider />
            <Layout>
                <Cell>
                    <Box padding="30px" align="right">
                        <Box width="80px">
                            <Button
                                onClick={onCancel}
                                priority="secondary"
                                dataHook="cancel-button"
                            >
                                Cancel
                            </Button>
                        </Box>
                        <Box marginLeft="18px" width="80px">
                            <Button
                                disabled={!isSaveEnabled}
                                dataHook="save-button"
                                onClick={onSave}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Cell>
            </Layout>
        </Card>
    );
};
