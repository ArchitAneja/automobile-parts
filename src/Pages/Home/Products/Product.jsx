import {
    ActionIcon,
    Badge,
    Button,
    Card,
    createStyles,
    Group,
    Image,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import { Heart, ShoppingCart } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },

    text: {
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.2,
    },

    body: {
        padding: theme.spacing.md,
    },
}));

export default function Product({ products }) {
    const theme = useMantineTheme();
    const {
        img,
        name,
        description,
        minimumQuantity,
        availableQuantity,

        price,
    } = products;
    const { classes } = useStyles();
    return (
        <Card withBorder shadow="xl" radius="md" p={0} className={classes.card}>
            <Group noWrap spacing={0}>
                <Image withPlaceholder src={img} height={140} width={140} />
                <div className={classes.body}>
                    <Text transform="uppercase" weight={900} size="xs">
                        {name}
                    </Text>
                    <Text
                        color="dimmed"
                        className={classes.text}
                        mt="xs"
                        mb="md"
                    >
                        {description}
                    </Text>
                    <Group noWrap spacing="xs">
                        <Text size="sm" className={classes.text} color="dimmed">
                            {" "}
                            Available:{" "}
                            <Badge color="red"> {availableQuantity}</Badge>
                        </Text>
                        <Text size="xl" color="dimmed">
                            •
                        </Text>
                        <Text size="sm" className={classes.text} color="dimmed">
                            Min Order: <Badge> {minimumQuantity}</Badge>
                        </Text>
                    </Group>
                    <Group noWrap spacing="xs">
                        <Group spacing="xs" noWrap>
                            <Text size="xs" weight={500} color="dimmed">
                                <Text component="span" size="xl" weight={700}>
                                    {" "}
                                    ${price}
                                </Text>
                                / per unit
                            </Text>
                        </Group>
                    </Group>
                    <Group noWrap spacing="sm" my="sm" position="apart">
                        <Button
                            uppercase
                            variant="light"
                            px="xl"
                            leftIcon={<ShoppingCart size={18} />}
                        >
                            Purchase
                        </Button>
                        <ActionIcon variant="hover">
                            <Heart size={22} color={theme.colors.red[6]} />
                        </ActionIcon>
                    </Group>
                </div>
            </Group>
        </Card>
    );
}
