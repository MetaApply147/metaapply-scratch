import { Box } from "@mui/material";
import styles from "./visaCalculator.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type InputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    error?: string;
    isRequired?: string;
    fullWidth?: boolean;
};

export function InputField({
    label,
    name,
    type = "text",
    placeholder,
    error,
    isRequired = "yes",
    fullWidth
}: InputProps) {
    return (
        <div className={`${styles.formField} ${fullWidth ? styles.fullWidth : ''}`} >
            <label>
                {label}
                {isRequired == "yes" ? <sup style={{color: '#DA1414'}}>*</sup>: ''}
            </label>

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={
                    error ? styles.errorInput : ""
                }
                maxLength={
                    name === "phone" ? 14 : undefined
                }
                onInput={(e: any) => {
                    if (name === "phone") {
                        e.target.value =
                            e.target.value.replace(
                                /[^0-9]/g,
                                ""
                            );
                    }
                }}
            />

            {error && (
                <p className={styles.errorText}>
                    {error}
                </p>
            )}
        </div>
    );
}

type SelectProps = {
    label: string;
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    error?: string;
    placeholder?: string;
};

export function SelectField({
    label,
    name,
    options,
    error,
    placeholder
}: SelectProps) {
    return (
        <div className={styles.formSection}>
            <label className={styles.selectLabel}>
                {label}
                <sup>*</sup>
            </label>

            <Box className={styles.selectWrap}>
                <select
                    name={name}
                    className={
                        error ? styles.errorInput : ""
                    }
                >
                    <option value="">{placeholder? placeholder : 'Select'}</option>

                    {options.map((item) => (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.label}
                        </option>
                    ))}
                </select>

                <ArrowDropDownIcon
                    className={styles.selectIcon}
                />

                {error && (
                    <p className={styles.errorText}>
                        {error}
                    </p>
                )}
            </Box>
        </div>
    );
}

type RadioProps = {
    label: string;
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    error?: string;
};

export function RadioGroup({
    label,
    name,
    options,
    error,
}: RadioProps) {
    return (
        <div className={`${styles.formSection} ${styles.radioSection}`}>
            <label className={styles.selectLabel}>
                {label}
                <sup>*</sup>
            </label>

            <div className={styles.radioGroup}>
                {options.map((item) => (
                    <label key={item.value} className={styles.radioLabel}>
                        <input
                            type="radio"
                            name={name}
                            value={item.value}
                        />

                        <span
                            className={
                                styles.checkmark
                            }
                        ></span>

                        {item.label}
                    </label>
                ))}
            </div>

            {error && (
                <p className={styles.errorText}>
                    {error}
                </p>
            )}
        </div>
    );
}