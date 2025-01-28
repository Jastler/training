import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Grid2,
  Alert,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { setError, setLoading, setUser } from "../../store/authSlice";
import { loginUser, registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { getValidationSchema } from "./validations";
import { getFirebaseErrorMessage } from "../../utils/getFirebaseErrorMessage";

type FormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const LoginRegister: React.FC = () => {
  const [isRegister, setIsRegister] = React.useState<boolean>(false);
  const formError = useAppSelector((state) => state.auth.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      navigate("/");
    } catch (error: any) {
      dispatch(setError(getFirebaseErrorMessage(error)));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Grid2 container justifyContent="center" alignItems="center">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
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
            sx={{ mt: 2 }}
          >
            {isRegister ? "Register" : "Login"}
          </Button>
          {formError && <Alert severity="error">{formError}</Alert>}
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            {isRegister
              ? "Already have an account? "
              : "Don't have an account? "}
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
    </Grid2>
  );
};

export default LoginRegister;
