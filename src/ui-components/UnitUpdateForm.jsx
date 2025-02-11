/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUnit } from "../graphql/queries";
import { updateUnit } from "../graphql/mutations";
const client = generateClient();
export default function UnitUpdateForm(props) {
  const {
    id: idProp,
    unit: unitModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ranking: "",
    address: "",
    status: "",
    statusDate: "",
    site: "",
    rent: "",
    available: "",
    size: "",
    naturalLight: "",
    modernBuilding: "",
    quiet: "",
    balcony: "",
    goodViews: "",
    nearbyParks: "",
    ac: "",
    cornerUnit: "",
    wifi: "",
    furnished: "",
  };
  const [ranking, setRanking] = React.useState(initialValues.ranking);
  const [address, setAddress] = React.useState(initialValues.address);
  const [status, setStatus] = React.useState(initialValues.status);
  const [statusDate, setStatusDate] = React.useState(initialValues.statusDate);
  const [site, setSite] = React.useState(initialValues.site);
  const [rent, setRent] = React.useState(initialValues.rent);
  const [available, setAvailable] = React.useState(initialValues.available);
  const [size, setSize] = React.useState(initialValues.size);
  const [naturalLight, setNaturalLight] = React.useState(
    initialValues.naturalLight
  );
  const [modernBuilding, setModernBuilding] = React.useState(
    initialValues.modernBuilding
  );
  const [quiet, setQuiet] = React.useState(initialValues.quiet);
  const [balcony, setBalcony] = React.useState(initialValues.balcony);
  const [goodViews, setGoodViews] = React.useState(initialValues.goodViews);
  const [nearbyParks, setNearbyParks] = React.useState(
    initialValues.nearbyParks
  );
  const [ac, setAc] = React.useState(initialValues.ac);
  const [cornerUnit, setCornerUnit] = React.useState(initialValues.cornerUnit);
  const [wifi, setWifi] = React.useState(initialValues.wifi);
  const [furnished, setFurnished] = React.useState(initialValues.furnished);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = unitRecord
      ? { ...initialValues, ...unitRecord }
      : initialValues;
    setRanking(cleanValues.ranking);
    setAddress(cleanValues.address);
    setStatus(cleanValues.status);
    setStatusDate(cleanValues.statusDate);
    setSite(cleanValues.site);
    setRent(cleanValues.rent);
    setAvailable(cleanValues.available);
    setSize(cleanValues.size);
    setNaturalLight(cleanValues.naturalLight);
    setModernBuilding(cleanValues.modernBuilding);
    setQuiet(cleanValues.quiet);
    setBalcony(cleanValues.balcony);
    setGoodViews(cleanValues.goodViews);
    setNearbyParks(cleanValues.nearbyParks);
    setAc(cleanValues.ac);
    setCornerUnit(cleanValues.cornerUnit);
    setWifi(cleanValues.wifi);
    setFurnished(cleanValues.furnished);
    setErrors({});
  };
  const [unitRecord, setUnitRecord] = React.useState(unitModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUnit.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUnit
        : unitModelProp;
      setUnitRecord(record);
    };
    queryData();
  }, [idProp, unitModelProp]);
  React.useEffect(resetStateValues, [unitRecord]);
  const validations = {
    ranking: [],
    address: [{ type: "Required" }],
    status: [],
    statusDate: [],
    site: [],
    rent: [],
    available: [],
    size: [],
    naturalLight: [],
    modernBuilding: [],
    quiet: [],
    balcony: [],
    goodViews: [],
    nearbyParks: [],
    ac: [],
    cornerUnit: [],
    wifi: [],
    furnished: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ranking: ranking ?? null,
          address,
          status: status ?? null,
          statusDate: statusDate ?? null,
          site: site ?? null,
          rent: rent ?? null,
          available: available ?? null,
          size: size ?? null,
          naturalLight: naturalLight ?? null,
          modernBuilding: modernBuilding ?? null,
          quiet: quiet ?? null,
          balcony: balcony ?? null,
          goodViews: goodViews ?? null,
          nearbyParks: nearbyParks ?? null,
          ac: ac ?? null,
          cornerUnit: cornerUnit ?? null,
          wifi: wifi ?? null,
          furnished: furnished ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUnit.replaceAll("__typename", ""),
            variables: {
              input: {
                id: unitRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UnitUpdateForm")}
      {...rest}
    >
      <TextField
        label="Ranking"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ranking}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking: value,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.ranking ?? value;
          }
          if (errors.ranking?.hasError) {
            runValidationTasks("ranking", value);
          }
          setRanking(value);
        }}
        onBlur={() => runValidationTasks("ranking", ranking)}
        errorMessage={errors.ranking?.errorMessage}
        hasError={errors.ranking?.hasError}
        {...getOverrideProps(overrides, "ranking")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address: value,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status: value,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Status date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={statusDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate: value,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.statusDate ?? value;
          }
          if (errors.statusDate?.hasError) {
            runValidationTasks("statusDate", value);
          }
          setStatusDate(value);
        }}
        onBlur={() => runValidationTasks("statusDate", statusDate)}
        errorMessage={errors.statusDate?.errorMessage}
        hasError={errors.statusDate?.hasError}
        {...getOverrideProps(overrides, "statusDate")}
      ></TextField>
      <TextField
        label="Site"
        isRequired={false}
        isReadOnly={false}
        value={site}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site: value,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.site ?? value;
          }
          if (errors.site?.hasError) {
            runValidationTasks("site", value);
          }
          setSite(value);
        }}
        onBlur={() => runValidationTasks("site", site)}
        errorMessage={errors.site?.errorMessage}
        hasError={errors.site?.hasError}
        {...getOverrideProps(overrides, "site")}
      ></TextField>
      <TextField
        label="Rent"
        isRequired={false}
        isReadOnly={false}
        value={rent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent: value,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.rent ?? value;
          }
          if (errors.rent?.hasError) {
            runValidationTasks("rent", value);
          }
          setRent(value);
        }}
        onBlur={() => runValidationTasks("rent", rent)}
        errorMessage={errors.rent?.errorMessage}
        hasError={errors.rent?.hasError}
        {...getOverrideProps(overrides, "rent")}
      ></TextField>
      <TextField
        label="Available"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={available}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available: value,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.available ?? value;
          }
          if (errors.available?.hasError) {
            runValidationTasks("available", value);
          }
          setAvailable(value);
        }}
        onBlur={() => runValidationTasks("available", available)}
        errorMessage={errors.available?.errorMessage}
        hasError={errors.available?.hasError}
        {...getOverrideProps(overrides, "available")}
      ></TextField>
      <TextField
        label="Size"
        isRequired={false}
        isReadOnly={false}
        value={size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size: value,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.size ?? value;
          }
          if (errors.size?.hasError) {
            runValidationTasks("size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("size", size)}
        errorMessage={errors.size?.errorMessage}
        hasError={errors.size?.hasError}
        {...getOverrideProps(overrides, "size")}
      ></TextField>
      <TextField
        label="Natural light"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={naturalLight}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight: value,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.naturalLight ?? value;
          }
          if (errors.naturalLight?.hasError) {
            runValidationTasks("naturalLight", value);
          }
          setNaturalLight(value);
        }}
        onBlur={() => runValidationTasks("naturalLight", naturalLight)}
        errorMessage={errors.naturalLight?.errorMessage}
        hasError={errors.naturalLight?.hasError}
        {...getOverrideProps(overrides, "naturalLight")}
      ></TextField>
      <TextField
        label="Modern building"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={modernBuilding}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding: value,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.modernBuilding ?? value;
          }
          if (errors.modernBuilding?.hasError) {
            runValidationTasks("modernBuilding", value);
          }
          setModernBuilding(value);
        }}
        onBlur={() => runValidationTasks("modernBuilding", modernBuilding)}
        errorMessage={errors.modernBuilding?.errorMessage}
        hasError={errors.modernBuilding?.hasError}
        {...getOverrideProps(overrides, "modernBuilding")}
      ></TextField>
      <TextField
        label="Quiet"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quiet}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet: value,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.quiet ?? value;
          }
          if (errors.quiet?.hasError) {
            runValidationTasks("quiet", value);
          }
          setQuiet(value);
        }}
        onBlur={() => runValidationTasks("quiet", quiet)}
        errorMessage={errors.quiet?.errorMessage}
        hasError={errors.quiet?.hasError}
        {...getOverrideProps(overrides, "quiet")}
      ></TextField>
      <TextField
        label="Balcony"
        isRequired={false}
        isReadOnly={false}
        value={balcony}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony: value,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.balcony ?? value;
          }
          if (errors.balcony?.hasError) {
            runValidationTasks("balcony", value);
          }
          setBalcony(value);
        }}
        onBlur={() => runValidationTasks("balcony", balcony)}
        errorMessage={errors.balcony?.errorMessage}
        hasError={errors.balcony?.hasError}
        {...getOverrideProps(overrides, "balcony")}
      ></TextField>
      <TextField
        label="Good views"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={goodViews}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews: value,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.goodViews ?? value;
          }
          if (errors.goodViews?.hasError) {
            runValidationTasks("goodViews", value);
          }
          setGoodViews(value);
        }}
        onBlur={() => runValidationTasks("goodViews", goodViews)}
        errorMessage={errors.goodViews?.errorMessage}
        hasError={errors.goodViews?.hasError}
        {...getOverrideProps(overrides, "goodViews")}
      ></TextField>
      <TextField
        label="Nearby parks"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={nearbyParks}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks: value,
              ac,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.nearbyParks ?? value;
          }
          if (errors.nearbyParks?.hasError) {
            runValidationTasks("nearbyParks", value);
          }
          setNearbyParks(value);
        }}
        onBlur={() => runValidationTasks("nearbyParks", nearbyParks)}
        errorMessage={errors.nearbyParks?.errorMessage}
        hasError={errors.nearbyParks?.hasError}
        {...getOverrideProps(overrides, "nearbyParks")}
      ></TextField>
      <TextField
        label="Ac"
        isRequired={false}
        isReadOnly={false}
        value={ac}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac: value,
              cornerUnit,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.ac ?? value;
          }
          if (errors.ac?.hasError) {
            runValidationTasks("ac", value);
          }
          setAc(value);
        }}
        onBlur={() => runValidationTasks("ac", ac)}
        errorMessage={errors.ac?.errorMessage}
        hasError={errors.ac?.hasError}
        {...getOverrideProps(overrides, "ac")}
      ></TextField>
      <TextField
        label="Corner unit"
        isRequired={false}
        isReadOnly={false}
        value={cornerUnit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit: value,
              wifi,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.cornerUnit ?? value;
          }
          if (errors.cornerUnit?.hasError) {
            runValidationTasks("cornerUnit", value);
          }
          setCornerUnit(value);
        }}
        onBlur={() => runValidationTasks("cornerUnit", cornerUnit)}
        errorMessage={errors.cornerUnit?.errorMessage}
        hasError={errors.cornerUnit?.hasError}
        {...getOverrideProps(overrides, "cornerUnit")}
      ></TextField>
      <TextField
        label="Wifi"
        isRequired={false}
        isReadOnly={false}
        value={wifi}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi: value,
              furnished,
            };
            const result = onChange(modelFields);
            value = result?.wifi ?? value;
          }
          if (errors.wifi?.hasError) {
            runValidationTasks("wifi", value);
          }
          setWifi(value);
        }}
        onBlur={() => runValidationTasks("wifi", wifi)}
        errorMessage={errors.wifi?.errorMessage}
        hasError={errors.wifi?.hasError}
        {...getOverrideProps(overrides, "wifi")}
      ></TextField>
      <TextField
        label="Furnished"
        isRequired={false}
        isReadOnly={false}
        value={furnished}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              address,
              status,
              statusDate,
              site,
              rent,
              available,
              size,
              naturalLight,
              modernBuilding,
              quiet,
              balcony,
              goodViews,
              nearbyParks,
              ac,
              cornerUnit,
              wifi,
              furnished: value,
            };
            const result = onChange(modelFields);
            value = result?.furnished ?? value;
          }
          if (errors.furnished?.hasError) {
            runValidationTasks("furnished", value);
          }
          setFurnished(value);
        }}
        onBlur={() => runValidationTasks("furnished", furnished)}
        errorMessage={errors.furnished?.errorMessage}
        hasError={errors.furnished?.hasError}
        {...getOverrideProps(overrides, "furnished")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || unitModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || unitModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
