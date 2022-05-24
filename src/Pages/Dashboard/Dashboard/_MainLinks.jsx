import { createStyles } from "@mantine/core";
import React, { useState } from "react";
import {
    BellRinging,
    DatabaseImport,
    Fingerprint,
    Key,
    Receipt2,
    Settings,
    TwoFA,
} from "tabler-icons-react";

const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef("icon");
    return {
        header: {
            paddingBottom: theme.spacing.md,
            marginBottom: theme.spacing.md * 1.5,
            borderBottom: `1px solid ${
                theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2]
            }`,
        },

        footer: {
            paddingTop: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderTop: `1px solid ${
                theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2]
            }`,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: theme.fontSizes.sm,
            color:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[1]
                    : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            "&:hover": {
                backgroundColor:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                color: theme.colorScheme === "dark" ? theme.white : theme.black,

                [`& .${icon}`]: {
                    color:
                        theme.colorScheme === "dark"
                            ? theme.white
                            : theme.black,
                },
            },
        },

        linkIcon: {
            ref: icon,
            color:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[2]
                    : theme.colors.gray[6],
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            "&, &:hover": {
                backgroundColor:
                    theme.colorScheme === "dark"
                        ? theme.fn.rgba(
                              theme.colors[theme.primaryColor][8],
                              0.25
                          )
                        : theme.colors[theme.primaryColor][0],
                color:
                    theme.colorScheme === "dark"
                        ? theme.white
                        : theme.colors[theme.primaryColor][7],
                [`& .${icon}`]: {
                    color: theme.colors[theme.primaryColor][
                        theme.colorScheme === "dark" ? 5 : 7
                    ],
                },
            },
        },
    };
});

const data = [
    { link: "", label: "Notifications", icon: BellRinging },
    { link: "", label: "Billing", icon: Receipt2 },
    { link: "", label: "Security", icon: Fingerprint },
    { link: "", label: "SSH Keys", icon: Key },
    { link: "", label: "Databases", icon: DatabaseImport },
    { link: "", label: "Authentication", icon: TwoFA },
    { link: "", label: "Other Settings", icon: Settings },
];

export function MainLinks() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState("Databases");
    return (
        <>
            {data.map((item, index) => {
                return (
                    <a
                        className={cx(classes.link, {
                            [classes.linkActive]: item.label === active,
                        })}
                        href={item.link}
                        key={index}
                        onClick={(event) => {
                            event.preventDefault();
                            setActive(item.label);
                        }}
                    >
                        <item.icon className={classes.linkIcon} />
                        <span>{item.label}</span>
                    </a>
                );
            })}
        </>
    );
}