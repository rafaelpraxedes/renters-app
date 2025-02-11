/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UnitUpdateFormInputValues = {
    ranking?: number;
    address?: string;
    status?: string;
    statusDate?: string;
    site?: string;
    rent?: string;
    available?: string;
    size?: string;
    naturalLight?: number;
    modernBuilding?: number;
    quiet?: number;
    balcony?: string;
    goodViews?: number;
    nearbyParks?: number;
    ac?: string;
    cornerUnit?: string;
    wifi?: string;
    furnished?: string;
};
export declare type UnitUpdateFormValidationValues = {
    ranking?: ValidationFunction<number>;
    address?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    statusDate?: ValidationFunction<string>;
    site?: ValidationFunction<string>;
    rent?: ValidationFunction<string>;
    available?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
    naturalLight?: ValidationFunction<number>;
    modernBuilding?: ValidationFunction<number>;
    quiet?: ValidationFunction<number>;
    balcony?: ValidationFunction<string>;
    goodViews?: ValidationFunction<number>;
    nearbyParks?: ValidationFunction<number>;
    ac?: ValidationFunction<string>;
    cornerUnit?: ValidationFunction<string>;
    wifi?: ValidationFunction<string>;
    furnished?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UnitUpdateFormOverridesProps = {
    UnitUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ranking?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    statusDate?: PrimitiveOverrideProps<TextFieldProps>;
    site?: PrimitiveOverrideProps<TextFieldProps>;
    rent?: PrimitiveOverrideProps<TextFieldProps>;
    available?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    naturalLight?: PrimitiveOverrideProps<TextFieldProps>;
    modernBuilding?: PrimitiveOverrideProps<TextFieldProps>;
    quiet?: PrimitiveOverrideProps<TextFieldProps>;
    balcony?: PrimitiveOverrideProps<TextFieldProps>;
    goodViews?: PrimitiveOverrideProps<TextFieldProps>;
    nearbyParks?: PrimitiveOverrideProps<TextFieldProps>;
    ac?: PrimitiveOverrideProps<TextFieldProps>;
    cornerUnit?: PrimitiveOverrideProps<TextFieldProps>;
    wifi?: PrimitiveOverrideProps<TextFieldProps>;
    furnished?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UnitUpdateFormProps = React.PropsWithChildren<{
    overrides?: UnitUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    unit?: any;
    onSubmit?: (fields: UnitUpdateFormInputValues) => UnitUpdateFormInputValues;
    onSuccess?: (fields: UnitUpdateFormInputValues) => void;
    onError?: (fields: UnitUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UnitUpdateFormInputValues) => UnitUpdateFormInputValues;
    onValidate?: UnitUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UnitUpdateForm(props: UnitUpdateFormProps): React.ReactElement;
