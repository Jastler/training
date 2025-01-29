import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { setError, setLoading, setUser } from "@store/authSlice";
import { useAppDispatch, useAppSelector } from "@store";
import { loginUser, registerUser } from "@services/authService";
import { getFirebaseErrorMessage } from "@utils/firebase/getFirebaseErrorMessage";
import { getValidationSchema } from "./validations";
import { useTheme } from "@mui/material/styles";

type FormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

interface LoginRegisterModalProps {
  onClose: () => void;
}

const LoginRegisterModal: React.FC<LoginRegisterModalProps> = ({ onClose }) => {
  const [isRegister, setIsRegister] = React.useState<boolean>(false);
  const formError = useAppSelector((state) => state.auth.error);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view

  const validationSchema = getValidationSchema(isRegister);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    dispatch(setLoading(true));
    try {
      if (isRegister) {
        if (data.password !== data.confirmPassword) {
          dispatch(setError("Passwords do not match"));
          return;
        }
        const user = await registerUser(data.email, data.password);
        dispatch(setUser(user));
      } else {
        const user = await loginUser(data.email, data.password);
        dispatch(setUser(user));
      }
      onClose(); // Close modal after successful login/register
    } catch (error: any) {
      dispatch(setError(getFirebaseErrorMessage(error)));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        width: { xs: "100%", sm: 400 },
        maxWidth: 500,
        margin: "auto",
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
        {isRegister ? "Register" : "Login"}
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Email"
          type="text"
          variant="outlined"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        {isRegister && (
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            fontSize: isMobile ? "0.875rem" : "1rem",
            padding: isMobile ? "10px" : "12px",
          }}
        >
          {isRegister ? "Register" : "Login"}
        </Button>

        {formError && <Alert severity="error">{formError}</Alert>}

        <Typography variant="body2" sx={{ mt: 2 }}>
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <Link
            component="button"
            variant="body2"
            onClick={(event) => {
              event.preventDefault();
              setIsRegister(!isRegister);
            }}
          >
            {isRegister ? "Login here" : "Register here"}
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
};

export default LoginRegisterModal;
