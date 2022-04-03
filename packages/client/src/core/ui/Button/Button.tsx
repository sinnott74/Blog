import React, { FC, useState, MouseEvent as ReactMouseEvent, useEffect, useCallback } from "react";
import { ButtonBase, ButtonBaseProps, Ripple } from "./styled";

export interface ButtonProps extends ButtonBaseProps {
    className?: string;
    onClick?: () => void;
    disableRipple?: boolean;
}

interface Origin {
    x: number;
    y: number;
}

const kInitialOrigin = { x: -1, y: -1 };

export const Button: FC<ButtonProps> = ({
    children,
    className,
    onClick,
    disableRipple,
    disableElevation,
    disabled,
    outlined,
    size,
    appearance,
    palette,
    selected,
}) => {
    const [animate, setAnimate] = useState(false);
    const [origin, setOrigin] = useState<Origin>(kInitialOrigin);

    const handleClick = useCallback(
        (e: ReactMouseEvent<HTMLSpanElement, MouseEvent>) => {
            const { left, top } = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - left,
                y = e.clientY - top;
            setOrigin({ x, y });
            setAnimate(false);
            onClick && onClick();
        },
        [onClick],
    );

    useEffect(() => {
        if (origin !== kInitialOrigin) {
            setAnimate(true);
        }
    }, [origin]);

    return (
        <ButtonBase
            className={className}
            disableElevation={disableElevation}
            disabled={disabled}
            outlined={outlined}
            size={size}
            palette={palette}
            appearance={appearance}
            selected={selected}
            onClick={handleClick}
        >
            {children}
            {!disableRipple && <Ripple {...origin} animate={animate} />}
        </ButtonBase>
    );
};
