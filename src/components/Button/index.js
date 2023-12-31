import {
    Link
} from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline,
    text,
    disabled,
    rounded,
    leftIcon,
    rightIcon,
    small,
    large,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }

    // * disable event listeners on disabled buttons
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                console.log(key)
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disabled,
        rounded,
        text,
        small,
        large,
    });

    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}> {children} </span> 
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;