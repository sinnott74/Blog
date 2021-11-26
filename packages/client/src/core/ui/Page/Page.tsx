import React, { useEffect, FC } from "react";
import Helmet from "react-helmet";
import { useScrollTop } from "../../common/utils/scrollTo";
import { Box } from "../Layout";

export interface Props {
    title: string;
}

export const Page: FC<Props> = ({ title, children }) => {
    useEffect(useScrollTop, [title]);

    return (
        <Box
            align="center"
            width="full"
            spacing={{ mobile: "xsmall", tablet: "medium", desktop: "medium", wide: "medium" }}
            spacingTop={{ mobile: "small", tablet: "medium", desktop: "medium", wide: "medium" }}
        >
            <Helmet>
                <title>{`${title} | DanielSinnott.com`}</title>
            </Helmet>
            {children}
        </Box>
    );
};
