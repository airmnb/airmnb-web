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
        onSecondaryClick,
        loadingPrimary,
        loadingSecondary
    } = props;
    return (
        <div className={className}>
            {primaryLabel && <Button type="submit" onClick={onPrimaryClick} loading={loadingPrimary} disabled={disablePrimary} primary>{primaryLabel}</Button>}
            {secondaryLabel && <Button type="button" onClick={onSecondaryClick} loading={loadingSecondary}  disabled={disableSecondary}>{secondaryLabel}</Button>}
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