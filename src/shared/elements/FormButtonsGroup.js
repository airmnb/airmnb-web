import React from 'react';
import { Button } from "..";
import styled from "styled-components";

const FormButtonsGroupRaw = (props) => {
    const {
        className,
        primaryLabel,
        disablePrimary,
        secondaryLabel,
        disableSecondary,
        onPrimaryClick,
        onSecondaryClick
    } = props;
    return (
        <div className={className}>
            {primaryLabel && <Button type="submit" onClick={onPrimaryClick} disable={disablePrimary} primary>{primaryLabel}</Button>}
            {secondaryLabel && <Button onClick={onSecondaryClick}  disable={disableSecondary}>{secondaryLabel}</Button>}
        </div>
    )
}

export const FormButtonsGroup = styled(FormButtonsGroupRaw)`
    margin-top: 30px;
    button {
        width: 245px;
        &:first-child{
            margin-right: 10px
        }
    }
`;