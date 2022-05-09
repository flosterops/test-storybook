import React, { FunctionComponent, ReactElement } from "react"
import Checkbox from "@mui/material/Checkbox"
import { colors } from "../../theme"
import { SwitchBaseProps } from "@mui/material/internal/SwitchBase"
import InputLabel from "@mui/material/InputLabel"
import styled from "@emotion/styled"

interface ICheckboxControl {
  id: string
  onChange?: SwitchBaseProps["onChange"]
  label?: string
  checked: boolean
}

const StyledCheckboxControlContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: auto;
`

export const CheckboxControl: FunctionComponent<ICheckboxControl> = ({ id, label, checked, onChange }): ReactElement => {
  return (
    <StyledCheckboxControlContainer>
      <Checkbox id={id} checked={checked} onChange={onChange} />
      {!!label && (
        <InputLabel style={{ zIndex: 1, color: colors.black, cursor: "pointer" }} htmlFor={id}>
          {label}
        </InputLabel>
      )}
    </StyledCheckboxControlContainer>
  )
}
