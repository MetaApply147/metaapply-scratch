// components/sections/referral/ReferralForm.tsx

'use client';

import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { useState } from 'react';

import { useCountries } from '@/hooks/useCountries';
import { useStates } from '@/hooks/useStates';

const degreeOptions = [
    'High School',
    'Diploma',
    'Bachelor Degree',
    'Masters Degree',
    'PhD',
];

export default function ReferralForm() {
    const [values, setValues] = useState({
        name: '',
        email: '',

        referralName: '',
        referralEmail: '',

        referralPhone: '',
        phoneCode: '91',

        highestDegree: '',

        currentCountry: '',
        currentState: '',

        preferredCountry: '',

        consent: true,
        terms: true,
    });

    const [errors, setErrors] = useState<any>({});

    // COUNTRY
    const selectedCountryId = values.currentCountry
        ? Number(values.currentCountry)
        : null;

    const { countries } = useCountries();

    const { states } = useStates(selectedCountryId);

    // HANDLE CHANGE
    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        // REMOVE ERROR ON CHANGE
        setErrors((prev: any) => ({
            ...prev,
            [name]: '',
        }));
    };

    // VALIDATE
    const validate = () => {
        const newErrors: any = {};

        if (!values.name.trim())
            newErrors.name = 'Name is required';

        if (!values.email.trim())
            newErrors.email = 'Email is required';
        else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                values.email
            )
        )
            newErrors.email = 'Enter valid email';

        if (!values.referralName.trim())
            newErrors.referralName =
                'Referral name is required';

        if (!values.referralEmail.trim())
            newErrors.referralEmail =
                'Referral email is required';

        if (!values.referralPhone.trim())
            newErrors.referralPhone =
                'Contact number is required';
        else if (
            values.referralPhone.length < 7
        )
            newErrors.referralPhone =
                'Enter valid contact number';

        if (!values.highestDegree)
            newErrors.highestDegree =
                'Select level of study';

        if (!values.currentCountry)
            newErrors.currentCountry =
                'Select current country';

        if (!values.currentState)
            newErrors.currentState =
                'Select current state';

        if (!values.preferredCountry)
            newErrors.preferredCountry =
                'Select preferred country';

        if (!values.consent)
            newErrors.consent =
                'Consent is required';

        if (!values.terms)
            newErrors.terms =
                'Please accept terms';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // SUBMIT
    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const isValid = validate();

        if (!isValid) return;

        console.log(values);
    };

    // FIELD STYLES
    const fieldStyles = {
        '& .MuiOutlinedInput-root': {
            height: '47px',

            borderRadius: '8px',

            backgroundColor: '#FFFFFF',

            transition: 'all 0.2s ease',

            '& fieldset': {
                borderColor: '#A7AEC1',
                borderWidth: '1px',
            },

            '&:hover fieldset': {
                borderColor: '#7E879C',
            },

            '&.Mui-focused fieldset': {
                borderColor: '#7E879C !important',
                borderWidth: '1px',
            },
        },

        '& .MuiInputBase-input': {
            padding: '10px 18px',

            fontSize: '16px',
            fontWeight: 400,

            lineHeight: '28px',

            color: '#000',

            fontFamily: 'Open Sans',
        },

        '& .MuiSelect-select': {
            padding: '10px 18px !important',

            display: 'flex',
            alignItems: 'center',
        },

        '& .MuiInputBase-input::placeholder': {
            color: '#7B7B7B',
            opacity: 1,
        },

        '& .MuiFormHelperText-root': {
            marginLeft: '2px',
            marginTop: '6px',

            fontSize: '12px',

            lineHeight: '18px',

            fontFamily: 'Open Sans',
        },
    };

    // COMMON DROPDOWN
    const commonSelectProps = {
        displayEmpty: true,

        IconComponent:
            KeyboardArrowDownRoundedIcon,

        MenuProps: {
            disableScrollLock: true,

            PaperProps: {
                sx: {
                    mt: '3px',

                    borderRadius: '10px',

                    maxHeight: 260,

                    minWidth: 120,

                    overflowX: 'hidden',

                    boxShadow:
                        '0px 6px 24px rgba(0,0,0,0.12)',

                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },

                    '&::-webkit-scrollbar-thumb': {
                        background: '#C5C5C5',
                        borderRadius: '10px',
                    },

                    '& .MuiMenu-list': {
                        py: '4px',
                    },

                    '& .MuiMenuItem-root': {
                        minHeight: '40px',

                        fontSize: '14px',

                        fontFamily: 'Open Sans',

                        color: '#000',

                        whiteSpace: 'nowrap',

                        '&.Mui-selected': {
                            backgroundColor: '#F5F5F5',
                        },

                        '&:hover': {
                            backgroundColor: '#F8F8F8',
                        },
                    },
                },
            },
        },
    };

    return (
        <Box
            sx={{
                backgroundColor: '#ffffff',

                borderRadius: '24px',

                px: {
                    xs: 3,
                    md: 4,
                },

                py: {
                    xs: 4,
                    md: 5,
                },
            }}
        >
            {/* HEADING */}

            <Typography
                sx={{
                    textAlign: 'center',

                    fontFamily: 'Open Sans',
                    fontWeight: 700,
                    fontSize: {
                        xs: '30px',
                        md: '32px',
                    },

                    lineHeight: '31px',

                    color: '#2E318C',

                    mb: 4,
                }}
            >
                <Box
                    component="span"
                    sx={{
                        color: '#FF3185',
                    }}
                >
                    Share
                </Box>{' '}
                Your Referral
            </Typography>

            {/* FORM */}

            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                {/* GRID */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md: '1fr 1fr',
                        },

                        gap: '20px',

                        mb: '20px',
                    }}
                >
                    {/* NAME */}

                    <TextField
                        fullWidth
                        name="name"
                        placeholder="Your Name"
                        value={values.name}
                        onChange={handleChange}
                        sx={fieldStyles}
                        error={!!errors.name}
                        helperText={errors.name}
                    />

                    {/* EMAIL */}

                    <TextField
                        fullWidth
                        name="email"
                        placeholder="Your E-mail ID"
                        value={values.email}
                        onChange={handleChange}
                        sx={fieldStyles}
                        error={!!errors.email}
                        helperText={errors.email}
                    />

                    {/* REFERRAL NAME */}

                    <TextField
                        fullWidth
                        name="referralName"
                        placeholder="Referral Name"
                        value={values.referralName}
                        onChange={handleChange}
                        sx={fieldStyles}
                        error={!!errors.referralName}
                        helperText={errors.referralName}
                    />

                    {/* REFERRAL EMAIL */}

                    <TextField
                        fullWidth
                        name="referralEmail"
                        placeholder="Referral E-mail ID"
                        value={values.referralEmail}
                        onChange={handleChange}
                        sx={fieldStyles}
                        error={!!errors.referralEmail}
                        helperText={errors.referralEmail}
                    />

                    {/* PHONE */}

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}
                    >
                        {/* COUNTRY CODE */}

                        <TextField
                            select
                            value={values.phoneCode}
                            onChange={(e) => {
                                setValues((prev) => ({
                                    ...prev,
                                    phoneCode: e.target.value,
                                }));
                            }}
                            SelectProps={commonSelectProps}
                            sx={{
                                width: '95px',

                                '& .MuiOutlinedInput-root': {
                                    height: '47px',

                                    borderRadius: '8px 0 0 8px',

                                    backgroundColor: '#fff',

                                    '& fieldset': {
                                        borderColor: '#A7AEC1',
                                    },

                                    '&:hover fieldset': {
                                        borderColor: '#7E879C',
                                    },

                                    '&.Mui-focused fieldset': {
                                        borderColor:
                                            '#7E879C !important',
                                    },
                                },

                                '& .MuiSelect-select': {
                                    padding:
                                        '10px 12px !important',

                                    display: 'flex',
                                    alignItems: 'center',
                                },
                            }}
                        >
                            {countries.map((country) => (
                                <MenuItem
                                    key={country.id}
                                    value={country.phone_code}
                                >
                                    +{country.phone_code}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* PHONE FIELD */}

                        <TextField
                            fullWidth
                            name="referralPhone"
                            placeholder="Referral Contact Number"
                            value={values.referralPhone}
                            onChange={handleChange}
                            sx={{
                                ...fieldStyles,

                                '& .MuiOutlinedInput-root': {
                                    ...fieldStyles[
                                    '& .MuiOutlinedInput-root'
                                    ],

                                    borderRadius: '0 8px 8px 0',
                                },
                            }}
                            error={!!errors.referralPhone}
                            helperText={
                                errors.referralPhone
                            }
                        />
                    </Box>

                    {/* DEGREE */}

                    <TextField
                        select
                        fullWidth
                        name="highestDegree"
                        value={values.highestDegree}
                        onChange={handleChange}
                        SelectProps={commonSelectProps}
                        sx={fieldStyles}
                        error={!!errors.highestDegree}
                        helperText={
                            errors.highestDegree
                        }
                    >
                        <MenuItem value="" disabled>
                            Referral's Level of Study
                        </MenuItem>

                        {degreeOptions.map((item) => (
                            <MenuItem
                                key={item}
                                value={item}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>

                    {/* CURRENT COUNTRY */}

                    <TextField
                        select
                        fullWidth
                        name="currentCountry"
                        value={values.currentCountry}
                        onChange={handleChange}
                        SelectProps={commonSelectProps}
                        sx={fieldStyles}
                        error={!!errors.currentCountry}
                        helperText={
                            errors.currentCountry
                        }
                    >
                        <MenuItem value="" disabled>
                            Select Current Country
                        </MenuItem>

                        {countries.map((country) => (
                            <MenuItem
                                key={country.id}
                                value={country.id}
                            >
                                {country.country_name}
                            </MenuItem>
                        ))}
                    </TextField>

                    {/* CURRENT STATE */}

                    <TextField
                        select
                        fullWidth
                        name="currentState"
                        value={values.currentState}
                        onChange={handleChange}
                        SelectProps={commonSelectProps}
                        sx={fieldStyles}
                        error={!!errors.currentState}
                        helperText={
                            errors.currentState
                        }
                    >
                        <MenuItem value="" disabled>
                            Referral Current State
                        </MenuItem>

                        {states.map((state) => (
                            <MenuItem
                                key={state.id}
                                value={state.id}
                            >
                                {state.state_name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                {/* PREFERRED COUNTRY */}

                <TextField
                    select
                    fullWidth
                    name="preferredCountry"
                    value={values.preferredCountry}
                    onChange={handleChange}
                    SelectProps={commonSelectProps}
                    sx={{
                        ...fieldStyles,
                        mb: 3,
                    }}
                    error={!!errors.preferredCountry}
                    helperText={
                        errors.preferredCountry
                    }
                >
                    <MenuItem value="" disabled>
                        Select Referral's Preferred
                        Country
                    </MenuItem>

                    {countries.map((country) => (
                        <MenuItem
                            key={country.id}
                            value={country.id}
                        >
                            {country.country_name}
                        </MenuItem>
                    ))}
                </TextField>

                {/* CHECKBOXES */}

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    {/* CONSENT */}

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={values.consent}
                                onChange={(e) => {
                                    setValues((prev) => ({
                                        ...prev,
                                        consent:
                                            e.target.checked,
                                    }));

                                    setErrors(
                                        (prev: any) => ({
                                            ...prev,
                                            consent: '',
                                        })
                                    );
                                }}
                                sx={{
                                    color: '#E53935',

                                    '&.Mui-checked': {
                                        color: '#E53935',
                                    },
                                }}
                            />
                        }
                        label={
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    lineHeight: '24px',
                                    color: '#4A4A4A',
                                    fontFamily: 'Open Sans',
                                }}
                            >
                                I authorise MetaApply |
                                IE & its representatives
                                to contact me with
                                updates and
                                notifications via
                                Email/SMS/WhatsApp/Call.
                                This will override on
                                DND/NDNC.
                            </Typography>
                        }
                    />

                    {errors.consent && (
                        <Typography
                            sx={{
                                color: 'error.main',
                                fontSize: '12px',
                            }}
                        >
                            {errors.consent}
                        </Typography>
                    )}

                    {/* TERMS */}

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={values.terms}
                                onChange={(e) => {
                                    setValues((prev) => ({
                                        ...prev,
                                        terms:
                                            e.target.checked,
                                    }));

                                    setErrors(
                                        (prev: any) => ({
                                            ...prev,
                                            terms: '',
                                        })
                                    );
                                }}
                                sx={{
                                    color: '#E53935',

                                    '&.Mui-checked': {
                                        color: '#E53935',
                                    },
                                }}
                            />
                        }
                        label={
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    lineHeight: '24px',
                                    color: '#4A4A4A',
                                    fontFamily: 'Open Sans',
                                }}
                            >
                                I have read and agreed
                                to{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#1565C0',
                                        cursor: 'pointer',
                                    }}
                                >
                                    terms
                                </Box>{' '}
                                &{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#1565C0',
                                        cursor: 'pointer',
                                    }}
                                >
                                    privacy policy
                                </Box>
                            </Typography>
                        }
                    />

                    {errors.terms && (
                        <Typography
                            sx={{
                                color: 'error.main',
                                fontSize: '12px',
                            }}
                        >
                            {errors.terms}
                        </Typography>
                    )}
                </Box>

                {/* BUTTON */}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',

                        mt: 4,
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: '128px',
                            height: '44px',

                            borderRadius: '8px',

                            background:
                                'linear-gradient(90deg, #FF3185 0%, #F06BAA 100%)',

                            boxShadow: 'none',

                            textTransform: 'none',

                            fontSize: '18px',
                            fontWeight: 700,
                            fontFamily: 'Open Sans',

                            '&:hover': {
                                boxShadow: 'none',

                                background:
                                    'linear-gradient(90deg, #FF3185 0%, #F06BAA 100%)',
                            },
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}